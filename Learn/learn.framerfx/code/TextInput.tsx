import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"
import { Interactive } from "./Interactive"
import {
    colors,
    TextInput_Default,
    TextInput_Focused,
    TextInput_Warn,
    TextInput_Clear,
} from "./canvas"

type Props = {
    value: string
    placeholder: string
    disabled: boolean
    readOnly: boolean
    password: boolean
    message: string
    height: any
    width: any
    delay: number
    validation: (value: string) => boolean
    onBlur: (value: string, valid: boolean) => any
    onFocus: (value: string, valid: boolean) => any
    onInputStart: () => any
    onValueChange: (value: string, valid: boolean) => any
}

/**
 * TextInput
 * @param props
 */
export function TextInput(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming the value to avoid conflicting with the state's `value`
    // property
    const {
        value: initialValue,
        placeholder,
        disabled,
        readOnly,
        password,
        validation,
        onInputStart,
        onValueChange,
        message,
        delay,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Store the input's last value in a ref
    const input = React.useRef<HTMLInputElement>()
    const inputValue = React.useRef(initialValue)

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        valid: validation(initialValue),
        typing: false,
        focused: false,
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        // Sync inputValue ref with initialValue
        inputValue.current = initialValue

        setState({
            ...state,
            value: initialValue,
            valid: validation(initialValue),
        })
    }, [initialValue, validation])

    /* ----------------------------- Event Handlers ----------------------------- */

    // Set the focus state when the user clicks in or out of the input
    const setFocus = (focused: boolean) => {
        if (focused) {
            props.onFocus(state.value, state.valid)
        } else {
            props.onBlur(state.value, state.valid)
        }

        setState({ ...state, focused })
    }

    // When the content of the input changes, run onValueChange and update state
    const handleInput = event => {
        if (disabled) return

        const { value } = event.target

        // Store the value in the inputValue ref
        inputValue.current = value

        // If we're not already typing, run props.onInputStart()
        if (!state.typing) {
            onInputStart()
        }

        // Set value and typing states
        setState({ ...state, value, typing: true })

        // After .5 seconds, check whether inputValue is still the same
        setTimeout(() => {
            // And if it is, run onValueChange and update state
            if (value === inputValue.current) {
                const valid = validation(value)
                onValueChange(value, valid)
                setState({ ...state, typing: false, value, valid })
            }
        }, delay)
    }

    // Clear input
    const handleClear = event => {
        if (disabled || readOnly) return

        setState({ ...state, value: undefined })
    }

    /* ------------------------------ Presentation ------------------------------ */

    // Grab the properties we want to use from state
    const { value, valid, focused } = state

    return (
        <Interactive
            disabled={disabled}
            width={props.width}
            height={props.height}
            active={false}
            overflow={"hidden"}
            {...props as any}
        >
            <TextInput_Default width="100%" height={50} />
            <TextInput_Focused
                width="100%"
                height={50}
                variants={{
                    on: {
                        opacity: 1,
                    },
                    off: {
                        opacity: 0,
                    },
                }}
                transition={{
                    duration: 0.15,
                }}
                initial={focused ? "on" : "off"}
                animate={focused ? "on" : "off"}
            />
            <TextInput_Warn
                width="100%"
                height={50}
                variants={{
                    on: {
                        opacity: 1,
                    },
                    off: {
                        opacity: 0,
                    },
                }}
                transition={{
                    duration: 0.15,
                }}
                initial={valid ? "off" : "on"}
                animate={valid ? "off" : "on"}
            />
            <input
                ref={input}
                type={password ? "password" : "text"}
                value={value || ""}
                placeholder={placeholder || ""}
                disabled={disabled}
                readOnly={readOnly}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    padding: "0px 12px",
                    fontSize: 14,
                    fontWeight: 600,
                    width: "100%",
                    height: 50,
                    background: "none",
                    borderRadius: 4,
                    outline: "none",
                    border: "none",
                    color: valid ? colors.Dark : colors.Warn,
                }}
                // Events
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={handleInput}
            />
            {
                //value && !readOnly && (
                //<TextInput_Clear right={0} center="y" onTap={handleClear} />
                //)
            }
            <div
                style={{
                    width: "100%",
                    position: "absolute",
                    top: 50,
                    left: 0,
                    padding: 8,
                    fontFamily: "Helvetica Neue",
                    color: valid ? colors.Dark : colors.Warn,
                    fontSize: 12,
                }}
            >
                {message}
            </div>
        </Interactive>
    )
}

// Set the component's default properties
TextInput.defaultProps = {
    value: undefined,
    placeholder: undefined,
    disabled: false,
    readOnly: false,
    onFocus: () => null,
    onBlur: () => null,
    validation: () => true,
    onInputStart: () => null,
    onValueChange: () => null,
    delay: 250,
    height: 50,
    width: 200,
}

// Set the component's property controls
addPropertyControls(TextInput, {
    value: {
        type: ControlType.String,
        defaultValue: "",
        title: "Value",
    },
    placeholder: {
        type: ControlType.String,
        defaultValue: "",
        title: "Placeholder",
    },
    password: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Password",
    },
    readOnly: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Read Only",
    },
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
    message: {
        type: ControlType.String,
        defaultValue: "",
        title: "Message",
    },
})
