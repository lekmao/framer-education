import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType, Stack } from "framer"
import { colors } from "./canvas"
import { Interactive } from "./Interactive"
import { Checkbox } from "./Checkbox"

type Props = {
    id: string
    width: number | string
    height: number | string
    options: string[]
    value: string
    selectedIndices: string
    disabled: boolean
    onValueChange: (value: string[], indices: boolean[], valid: boolean) => void
    validation: (value: string[]) => boolean
}

/**
 * Segment
 * @param props
 */
export function CheckboxGroup(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming the value and selectedIndex, to avoid conflicting with the
    // state's `value` and `selectedIndex` properties.
    const {
        value: initial,
        options,
        width,
        disabled,
        validation,
        onValueChange,
    } = props

    /* ---------------------------------- State --------------------------------- */

    const initialIndices = (options || []).map(o => false)

    for (let option of initial.split(", ")) {
        const index = options.indexOf(option)
        initialIndices[index] = true
    }

    const initialValue = options.filter((option, i) => initialIndices[i])

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        selectedIndices: initialIndices,
        valid: validation(initialValue),
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        setState({
            ...state,
            value: initialValue,
            selectedIndices: initialIndices,
            valid: validation(initialValue),
        })
    }, [options, initial])

    /* ----------------------------- Event Handlers ----------------------------- */

    const { value, valid, selectedIndices } = state

    // When the user selects an option, updatet state and run onValueChange
    const setSelectedIndex = (index: number, bool: boolean) => {
        if (disabled) return

        const selectedIndices = [...state.selectedIndices]
        selectedIndices[index] = bool

        const value = options.filter((option, i) => selectedIndices[i])

        const valid = validation(value)

        onValueChange(value, selectedIndices, valid)

        setState({
            ...state,
            value,
            valid,
            selectedIndices,
        })
    }

    /* ------------------------------- Presntation ------------------------------ */

    return (
        <Stack
            size="100%"
            direction="vertical"
            alignment="center"
            gap={1}
            borderRadius={12}
            overflow="hidden"
            border={`1px solid ${valid ? colors.Border : colors.Warn}`}
            background={disabled ? colors.Light : colors.Border}
        >
            {options.map((option, index) => {
                // An option is selected if its index matches the state's selectedIndex
                return (
                    <Stack
                        // Constant props
                        key={`${props.id}_option_${index}`}
                        width="1fr"
                        height={50}
                        alignment="center"
                        distribution="space-between"
                        direction="horizontal"
                        paddingLeft={20}
                        style={{
                            fontFamily: "Helvetica Neue",
                            color: valid ? colors.Dark : colors.Warn,
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                        background={colors.Light}
                    >
                        <span>{option}</span>
                        <Checkbox
                            disabled={disabled}
                            value={selectedIndices[index]}
                            validation={() => valid}
                            onValueChange={value =>
                                setSelectedIndex(index, value)
                            }
                        />
                    </Stack>
                )
            })}
        </Stack>
    )
}

// Set the component's default properties
CheckboxGroup.defaultProps = {
    selectedIndex: 0,
    value: "",
    options: ["Red", "Blue", "Green"],
    height: 154,
    width: 200,
    disabled: false,
    onValueChange: () => null,
    validation: () => true,
}

// Set the component's property controls
addPropertyControls(CheckboxGroup, {
    value: {
        type: ControlType.String,
        defaultValue: "",
        title: "Value",
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
