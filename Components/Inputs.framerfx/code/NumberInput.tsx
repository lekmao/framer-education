import * as React from "react"
import {
    Frame,
    Stack,
    FrameProps,
    addPropertyControls,
    ControlType,
} from "framer"

// Number Input
// @steveruizok

type Props = FrameProps & {
    value: number
    disabled: boolean
    onValueChange: (value: number) => void
    min: number
    max: number
    step: number
}

export function NumberInput(props: Partial<Props>) {
    const { value, disabled, onValueChange, min, max, step, ...rest } = props

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
        const clampedValue = Math.max(Math.min(value, max), min)

        if (disabled || clampedValue === state.value) {
            return
        }

        onValueChange(clampedValue)

        setState({
            value: clampedValue,
        })
    }

    const incrementValue = () => handleValueChange(state.value + step)

    const decrementValue = () => handleValueChange(state.value - step)

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
            <Frame
                height={"100%"}
                width={"1fr"}
                opacity={state.value <= min ? 0.5 : 1}
                onTap={decrementValue}
            >
                -
            </Frame>
            <Frame height={"100%"} width={"1fr"}>
                {state.value}
            </Frame>
            <Frame
                height={"100%"}
                width={"1fr"}
                opacity={state.value >= max ? 0.5 : 1}
                onTap={incrementValue}
            >
                +
            </Frame>
        </Stack>
    )
}

NumberInput.defaultProps = {
    value: 0,
    disabled: false,
    onValueChange: (value: number) => {},
    min: 0,
    max: Infinity,
    step: 1,
}

addPropertyControls(NumberInput, {
    value: {
        title: "Value",
        type: ControlType.Number,
        defaultValue: 0,
        min: 0,
        max: 100,
        step: 0.1,
    },
    min: {
        title: "Min",
        type: ControlType.Number,
        defaultValue: 0,
        displayStepper: true,
    },
    max: {
        title: "Max",
        type: ControlType.Number,
        defaultValue: 100,
        displayStepper: true,
    },
    step: {
        title: "Step",
        type: ControlType.Number,
        defaultValue: 1,
        step: 0.1,
        displayStepper: true,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
