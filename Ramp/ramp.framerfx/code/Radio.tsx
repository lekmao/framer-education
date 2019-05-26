import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"
import { Interactive } from "./Interactive"
import {
    colors,
    Radio_On,
    Radio_Off,
    Radio_Default,
    Radio_Warn,
} from "./Canvas"

type Props = {
    height: number
    width: number
    value: boolean
    disabled: boolean
    validation: (value: boolean) => boolean
    onValueChange: (value: boolean, valid: boolean) => any
}

/**
 * Switch
 * @param props
 */
export function Radio(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming value to avoid conflicting with the state's value
    // property
    const {
        value: initialValue,
        disabled,
        onValueChange,
        validation,
        height,
        width,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        valid: validation(initialValue),
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        setState({
            ...state,
            value: initialValue,
            valid: validation(initialValue),
        })
    }, [initialValue, validation])

    /* ----------------------------- Event Handlers ----------------------------- */

    // When the user taps on the switch, run onValueChange and flip the isOn state
    const handleTap = () => {
        if (disabled || state.value) return

        setState(state => {
            const value = true

            const valid = validation(value)

            onValueChange(value, valid)

            return {
                ...state,
                value,
                valid,
            }
        })
    }

    /* ------------------------------ Presentation ------------------------------ */

    // Grab the properties we want to use from state
    const { value, valid } = state

    const Container = valid ? Radio_Default : Radio_Warn
    const Fill = value ? Radio_On : Radio_Off

    return (
        <Interactive
            height={50}
            width={50}
            disabled={disabled}
            onClick={handleTap}
            {...props as any}
        >
            <Container center height={50} width={50} />
            <Radio_Off center height={50} width={50} />
            <Radio_On
                center
                height={50}
                width={50}
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
                initial={value ? "on" : "off"}
                animate={value ? "on" : "off"}
            />
        </Interactive>
    )
}

// Set the component's default properties
Radio.defaultProps = {
    value: false,
    disabled: false,
    height: 50,
    width: 50,
    validation: () => true,
    onValueChange: () => null,
}

// Set the component's property controls
addPropertyControls(Radio, {
    value: {
        type: ControlType.Boolean,
        title: "Checked",
        defaultValue: false,
    },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: false,
    },
})
