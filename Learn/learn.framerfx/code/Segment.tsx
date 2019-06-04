import * as React from "react"
import { addPropertyControls, ControlType, Stack, FrameProps } from "framer"
import { Interactive } from "./Interactive"
import { Link } from "./Link"
import { Button } from "./Button"
import { colors } from "./canvas"

type Props = Partial<FrameProps> & {
    value: string
    options: string[]
    required: boolean
    disabled: boolean
    onValueChange: (value: string, index: number, valid: boolean) => void
    validation: (value: string, index: number) => boolean
}

export function Segment(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming the value and selectedIndex, to avoid conflicting with the
    // state's `value` and `selectedIndex` properties.
    const {
        value: initial,
        options,
        required,
        disabled,
        validation,
        onValueChange,
        ...rest
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Set the initial value
    const initialSelectedIndex =
        typeof initial === "number" ? initial : options.indexOf(initial)

    const initialValue =
        typeof initial === "number" ? options[initialSelectedIndex] : initial

    const validate = (value, index) =>
        index && index >= 0 ? validation(value, index) : !required

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        selectedIndex: initialSelectedIndex,
        valid: validate(initialValue, initialSelectedIndex),
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        const selectedValue = initialValue || null
        const selectedIndex = options.indexOf(selectedValue) || null

        setState({
            ...state,
            value: selectedValue,
            selectedIndex: options.indexOf(selectedValue),
            valid: validate(selectedValue, selectedIndex),
        })
    }, [initialValue, options])

    // Re-validate when required or validation changes
    React.useEffect(() => {
        setState({
            ...state,
            valid: validate(state.value, state.selectedIndex),
        })
    }, [validation, required])

    /* ----------------------------- Event Handlers ----------------------------- */

    // When the user selects an option, updatet state and run onValueChange
    const setSelectedIndex = (selectedIndex: number) => {
        if (disabled) return

        const selectedValue = options[selectedIndex]

        const value = selectedValue || null

        const valid = validation(value, selectedIndex)

        onValueChange(value, selectedIndex, valid)

        setState({
            ...state,
            value,
            selectedIndex,
            valid,
        })
    }

    /* ------------------------------- Presntation ------------------------------ */

    // Get the properties we want from state
    const { value, selectedIndex, valid } = state

    const variants = {
        disabled: {
            background: colors.Light,
            border: `1px solid ${colors.Neutral}`,
        },
        initial: {
            background: colors.Border,
            border: `1px solid ${colors.Border}`,
        },
        hovered: {
            background: colors.Light,
            border: `1px solid ${colors.Neutral}`,
        },
        active: {
            background: colors.Light,
            border: `1px solid ${colors.Active}`,
        },
        warn: {
            background: colors.Warn,
            border: `1px solid ${colors.Warn}`,
        },
    }

    return (
        <Interactive disabled={disabled} {...rest}>
            {current => (
                <Stack
                    height={"100%"}
                    width={"100%"}
                    direction="horizontal"
                    alignment="center"
                    gap={1}
                    borderRadius={12}
                    overflow="hidden"
                    {...variants[valid ? current : "warn"]}
                >
                    {options.map((option, index) => {
                        // An option is selected if its index matches the state's selectedIndex
                        const focused = index === selectedIndex
                        return (
                            <Link
                                key={`${props.id}_option_${index}`}
                                width={"1fr"}
                                text={option}
                                background={
                                    focused ? colors.Primary : colors.Light
                                }
                                type={focused ? "ghost" : "primary"}
                                disabled={disabled}
                                onTap={() =>
                                    !disabled && setSelectedIndex(index)
                                }
                            />
                        )
                    })}
                </Stack>
            )}
        </Interactive>
    )
}

// Set the component's default properties
Segment.defaultProps = {
    height: 50,
    width: 320,
    disabled: false,
    tint: "#027aff",
    textTint: "#FFFFFF",
    value: null,
    options: [],
    onValueChange: () => null,
    validation: () => true,
}

// Set the component's property controls
addPropertyControls(Segment, {
    value: {
        type: ControlType.String,
        defaultValue: "Paris",
        title: "Value",
    },
    options: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Paris", "New York", "London"],
        title: "Options",
    },
    required: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Required",
    },
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
})
