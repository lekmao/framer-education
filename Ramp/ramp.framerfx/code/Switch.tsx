import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"
import { Interactive } from "./Interactive"
import {
    colors,
    Switch_Knob,
    Switch_Container_On,
    Switch_Container_Off,
} from "./Canvas"

type Props = {
    height: number | string
    width: number | string
    value: boolean
    disabled: boolean
    tint: string
    accent: string
    validation: (value: boolean) => boolean
    onValueChange: (value: boolean, valid: boolean) => any
}

/**
 * Switch
 * @param props
 */
export function Switch(props: Partial<Props>) {
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
        tint,
        accent,
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
        if (disabled) return

        setState(state => {
            const value = !state.value

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

    return (
        <Interactive
            height={height}
            width={width}
            disabled={disabled}
            // {...props as any}
            onClick={handleTap}
        >
            <Switch_Container_Off center="y" />
            <Switch_Container_On
                center="y"
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
            <Switch_Knob
                center="y"
                variants={{
                    on: {
                        x: 24,
                    },
                    off: {
                        x: 0,
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
Switch.defaultProps = {
    value: false,
    disabled: false,
    height: 50,
    width: 64,
    tint: "#027aff",
    accent: "#FFFFFF",
    validation: () => true,
    onValueChange: () => null,
}

// Set the component's property controls
addPropertyControls(Switch, {
    value: {
        type: ControlType.Boolean,
        title: "On",
    },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
    },
})
