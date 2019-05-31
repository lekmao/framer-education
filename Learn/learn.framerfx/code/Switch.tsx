import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"
import { Interactive } from "./Interactive"
import { colors } from "./canvas"

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

    const variants = {
        initial: {
            border: `1px solid ${colors.Neutral}`,
        },
        hovered: {
            border: `1px solid ${colors.Border}`,
        },
        active: {
            border: `1px solid ${colors.Active}`,
        },
        warn: {
            border: `1px solid ${colors.Warn}`,
        },
    }

    return (
        <Interactive {...props as any} onTap={!disabled && handleTap}>
            {current => {
                return (
                    <>
                        <Frame
                            center="y"
                            height={40}
                            width={64}
                            borderRadius={25}
                            variants={{
                                on: {
                                    background: colors.Primary,
                                },
                                off: {
                                    background: colors.Neutral,
                                },
                            }}
                            transition={{
                                duration: 0.15,
                            }}
                            initial={value ? "on" : "off"}
                            animate={value ? "on" : "off"}
                        >
                            <Frame
                                center="y"
                                height={36}
                                width={36}
                                background="none"
                                variants={{
                                    on: {
                                        x: 26,
                                    },
                                    off: {
                                        x: 2,
                                    },
                                }}
                                transition={{
                                    duration: 0.15,
                                }}
                            >
                                <Frame
                                    height="100%"
                                    width="100%"
                                    borderRadius="100%"
                                    background={colors.Light}
                                    shadow={`0px 2px 5px ${colors.Shadow}`}
                                    {...variants[valid ? current : "warn"]}
                                />
                            </Frame>
                        </Frame>
                    </>
                )
            }}
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
