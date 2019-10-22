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
    disabled: boolean
    onValueChange: (value: string, index: number) => void
}

export function EnumInput(props: Partial<Props>) {
    const {
        value,
        disabled,
        onValueChange,
        options,
        selectedIndex,
        ...rest
    } = props

    // ----------------------- Props ---------------------------

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
    })

    // Update state when component receives new value prop
    React.useEffect(() => {
        setState({
            value: processed.value,
            selectedIndex: processed.selectedIndex,
        })
    }, [value, selectedIndex])

    // ------------------- Event Handlers ----------------------

    const handleValueChange = (selectedIndex: number) => {
        if (disabled || selectedIndex === state.selectedIndex) {
            return
        }

        const value = options[selectedIndex]

        onValueChange(value, selectedIndex)

        setState({
            value: selectedIndex < 0 ? null : value,
            selectedIndex,
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
    disabled: false,
    onValueChange: (value: string, index: number) => {},
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
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
