import * as React from "react"
import {
    Frame,
    Stack,
    FrameProps,
    addPropertyControls,
    ControlType,
} from "framer"

// String Input
// @steveruizok

type Props = FrameProps & {
    value: string
    placeholder: string
    readOnly: boolean
    password: boolean
    disabled: boolean
    onFocus: (value: string) => void
    onBlur: (value: string) => void
    onValueChange: (value: string) => void
}

export function StringInput(props: Partial<Props>) {
    const {
        value,
        placeholder,
        readOnly,
        password,
        disabled,
        onValueChange,
        onFocus,
        onBlur,
        ...rest
    } = props

    // ------------------------ State --------------------------

    // Set an initial state
    const [state, setState] = React.useState({
        value,
    })

    // Update state when component receives new value prop
    React.useEffect(() => {
        setState({
            value,
        })
    }, [value])

    // ------------------- Event Handlers ----------------------

    const handleValueChange = (value: Props["value"]) => {
        if (disabled || value === state.value) {
            return
        }

        onValueChange(value)

        setState({
            value,
        })
    }

    // --------------------- Presentation -----------------------

    const variants = {
        initial: {
            opacity: 1,
            border: `1px solid #777`,
        },
        disabled: {
            opacity: 0.3,
            border: `1px solid #777`,
        },
    }

    const currentVariant = disabled ? "disabled" : "initial"

    return (
        <Stack
            {...rest}
            variants={variants}
            initial={currentVariant}
            animate={currentVariant}
        >
            <input
                value={state.value}
                type={password ? "password" : "text"}
                readOnly={readOnly}
                disabled={disabled}
                placeholder={placeholder}
                onChange={e => handleValueChange(e.target.value)}
                onFocus={e => onFocus(state.value)}
                onBlur={e => onBlur(state.value)}
                style={{
                    height: "100%",
                    width: "100%",
                }}
            />
        </Stack>
    )
}

StringInput.defaultProps = {
    value: "",
    placeholder: "",
    password: false,
    readOnly: false,
    disabled: false,
    onFocus: value => {},
    onBlur: value => {},
    onValueChange: value => {},
}

addPropertyControls(StringInput, {
    value: {
        title: "Value",
        type: ControlType.String,
        defaultValue: "",
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "",
    },
    password: {
        title: "Password",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    readOnly: {
        title: "ReadOnly",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
