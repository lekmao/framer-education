import * as React from "react"
import {
    Frame,
    Stack,
    FrameProps,
    addPropertyControls,
    ControlType,
} from "framer"

// Enum Input
// @steveruizok

type Props = FrameProps & {
    value: string
    selectedIndex: number
    options: string[]
    required: boolean
    disabled: boolean
    validation: (value: string, index: number) => boolean
    onValueChange: (value: string, index: number, valid: boolean) => void
}

export function EnumInput(props: Partial<Props>) {
    const {
        value,
        validation,
        required,
        disabled,
        onValueChange,
        options,
        selectedIndex,
        ...rest
    } = props

    // --------------------- Validation -------------------------

    const validate = (value: Props["value"], selectedIndex: number) => {
        if (
            required &&
            (selectedIndex < 0 ||
                selectedIndex === undefined ||
                selectedIndex === null)
        ) {
            return false
        } else {
            return validation(value, selectedIndex)
        }
    }

    const processProps = (
        value: string,
        options: string[],
        selectedIndex: number
    ) => {
        const index =
            selectedIndex === undefined ? options.indexOf(value) : selectedIndex

        return {
            value: options[index],
            selectedIndex: index,
        }
    }

    const processed = processProps(value, options, selectedIndex)

    // ------------------------ State --------------------------

    // Set an initial state
    const [state, setState] = React.useState({
        value: processed.value,
        selectedIndex: processed.selectedIndex,
        valid: validate(processed.value, processed.selectedIndex),
    })

    // Update state when component receives new value prop
    React.useEffect(() => {
        setState({
            value: processed.value,
            selectedIndex: processed.selectedIndex,
            valid: validate(processed.value, processed.selectedIndex),
        })
    }, [value, selectedIndex])

    // Update state when component receives new validation prop
    React.useEffect(() => {
        setState({
            ...state,
            valid: validate(state.value, state.selectedIndex),
        })
    }, [validation, required])

    // ------------------- Event Handlers ----------------------

    const handleValueChange = (selectedIndex: number) => {
        if (disabled || selectedIndex === state.selectedIndex) {
            return
        }

        const value = options[selectedIndex]

        const valid = validate(value, selectedIndex)

        onValueChange(value, selectedIndex, valid)

        setState({
            value: selectedIndex < 0 ? null : value,
            selectedIndex,
            valid,
        })
    }

    // --------------------- Presentation -----------------------

    const variants = {
        initial: {
            opacity: 1,
            border: `1px solid #777`,
        },
        warn: {
            opacity: 1,
            border: `1px solid #ff8866`,
        },
        disabled: {
            opacity: 0.3,
            border: `1px solid #777`,
        },
    }

    const currentVariant = disabled
        ? "disabled"
        : state.valid
        ? "initial"
        : "warn"

    return (
        <Stack
            {...rest}
            variants={variants}
            initial={currentVariant}
            animate={currentVariant}
            direction="horizontal"
            alignment="start"
            gap={1}
        >
            {options.map((option, index) => {
                const isSelected = state.selectedIndex === index

                return (
                    <Frame
                        width="1fr"
                        height="100%"
                        onTap={() => handleValueChange(index)}
                        opacity={isSelected ? 1 : 0.7}
                    >
                        {option}
                    </Frame>
                )
            })}
        </Stack>
    )
}

EnumInput.defaultProps = {
    value: "North",
    required: false,
    disabled: false,
    validation: (value: string, index: number) => true,
    onValueChange: (value: string, index: number, valid: boolean) => null,
    options: ["North", "East", "South", "West"],
}

addPropertyControls(EnumInput, {
    value: {
        title: "Value",
        type: ControlType.String,
        defaultValue: "North",
    },
    options: {
        title: "Options",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["North", "East", "South", "West"],
    },
    required: {
        title: "Required",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
