import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType, Stack } from "framer"
import { colors } from "./canvas"
import { Interactive } from "./Interactive"
import { Text } from "./Text"

type Props = {
    id: string
    width: number | string
    height: number | string
    options: string[]
    value: string
    selectedIndex: number
    disabled: boolean
    onValueChange: (value: string, index: number, valid: boolean) => void
    validation: (value: string) => boolean
}

/**
 * Segment
 * @param props
 */
export function Segment(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming the value and selectedIndex, to avoid conflicting with the
    // state's `value` and `selectedIndex` properties.
    const {
        value: initial,
        selectedIndex: initialIndex,
        options,
        disabled,
        validation,
        onValueChange,
        height,
        width,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Set the initial value
    const initialValue = initial ? initial : options[initialIndex]

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue || null,
        selectedIndex: options.indexOf(initialValue),
        valid: validation(initialValue || null),
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        const selectedValue = initialValue
            ? initialValue
            : options[initialIndex]

        setState({
            ...state,
            value: selectedValue || null,
            selectedIndex: options.indexOf(selectedValue),
            valid: validation(selectedValue || null),
        })
    }, [initialIndex, initialValue, options, validation])

    /* ----------------------------- Event Handlers ----------------------------- */

    // When the user selects an option, updatet state and run onValueChange
    const setSelectedIndex = (selectedIndex: number) => {
        if (disabled) return

        const selectedValue = options[selectedIndex]

        const value = selectedValue || null

        const valid = validation(value)

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
            background: colors.Border,
            border: `1px solid ${colors.Neutral}`,
        },
        active: {
            background: colors.Border,
            border: `1px solid ${colors.Active}`,
        },
        warn: {
            background: colors.Warn,
            border: `1px solid ${colors.Warn}`,
        },
    }

    return (
        <Interactive {...props as any}>
            {current => (
                <Stack
                    height={height}
                    width={width}
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
                            <Interactive
                                // Constant props
                                key={`${props.id}_option_${index}`}
                                width="1fr"
                                height="100%"
                                disabled={disabled}
                                // Events
                                onClick={() => setSelectedIndex(index)}
                            >
                                <Text
                                    size="100%"
                                    type="link"
                                    color={focused ? colors.Light : colors.Dark}
                                    background={
                                        focused ? colors.Primary : colors.Light
                                    }
                                >
                                    {option}
                                </Text>
                            </Interactive>
                        )
                    })}
                </Stack>
            )}
        </Interactive>
    )
}

// Set the component's default properties
Segment.defaultProps = {
    selectedIndex: 0,
    options: ["Red", "Blue", "Green"],
    height: 50,
    width: 200,
    disabled: false,
    tint: "#027aff",
    textTint: "#FFFFFF",
    onValueChange: () => null,
    validation: () => true,
}

// Set the component's property controls
addPropertyControls(Segment, {
    selectedIndex: {
        type: ControlType.Number,
        step: 1,
        min: -1,
        max: 10,
        displayStepper: true,
        defaultValue: 0,
    },
    options: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Red", "Green", "Blue"],
    },
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
})
