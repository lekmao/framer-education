import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType, Stack } from "framer"
import { colors } from "./canvas"
import { Interactive } from "./Interactive"
import { Checkbox } from "./Checkbox"
import { RowItem } from "./RowItem"

type Props = {
    id: string
    width: any
    height: any
    value: string[]
    options: string[]
    disabled: boolean
    validation: (value: string[]) => boolean
    onValueChange: (value: string[], valid: boolean) => void
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
        width,
        height,
        value: initial,
        options,
        disabled,
        validation,
        onValueChange,
    } = props

    /* ---------------------------------- State --------------------------------- */

    const initialIndices = (options || []).map(o => false)

    for (let option of initial) {
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

        onValueChange(value, valid)

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
            height={height}
            width={width}
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
                    <RowItem
                        key={`${props.id}_option_${index}`}
                        text={option}
                        component="checkbox"
                        width="100%"
                        disabled={disabled}
                        value={selectedIndices[index]}
                        validation={() => valid}
                        onTap={() =>
                            !disabled &&
                            setSelectedIndex(index, !selectedIndices[index])
                        }
                    />
                )
            })}
        </Stack>
    )
}

// Set the component's default properties
CheckboxGroup.defaultProps = {
    value: ["Paris"],
    options: ["Paris", "New York", "London", "Hong Kong"],
    height: 200,
    width: 320,
    disabled: false,
    onValueChange: () => null,
    validation: () => true,
}

// Set the component's property controls
addPropertyControls(CheckboxGroup, {
    value: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Paris"],
        title: "Value",
    },
    options: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Paris", "New York", "London", "Hong Kong"],
        title: "Options",
    },
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
})
