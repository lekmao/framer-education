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
    required: boolean
    disabled: boolean
    validation: (value: number) => boolean
    onValueChange: (value: number, valid: boolean) => void
    min: number
    max: number
    step: number
}

export function NumberInput(props: Partial<Props>) {
    const {
        value,
        validation,
        required,
        disabled,
        onValueChange,
        min,
        max,
        step,
        ...rest
    } = props

    // --------------------- Validation -------------------------

    const validate = (value: Props["value"]) => {
        if (
            required &&
            (value === NaN || value === undefined || value === null)
        ) {
            return false
        } else {
            return validation(value)
        }
    }

    // ------------------------ State --------------------------

    // Set an initial state
    const [state, setState] = React.useState({
        value,
        valid: validate(value),
    })

    // Update state when component receives new value prop
    React.useEffect(() => {
        setState({
            value,
            valid: validate(value),
        })
    }, [value])

    // Update state when component receives new validation prop
    React.useEffect(() => {
        setState({
            ...state,
            valid: validate(state.value),
        })
    }, [validation, required])

    // ------------------- Event Handlers ----------------------

    const handleValueChange = (value: Props["value"]) => {
        const clampedValue = Math.max(Math.min(value, max), min)

        if (disabled || clampedValue === state.value) {
            return
        }

        const valid = validate(clampedValue)

        onValueChange(clampedValue, valid)

        setState({
            value: clampedValue,
            valid,
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
    required: false,
    disabled: false,
    validation: (value: number) => true,
    onValueChange: (value: number, valid: boolean) => null,
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
