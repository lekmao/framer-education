import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"

type Props = FrameProps & {
    value: boolean
    required: boolean
    disabled: boolean
    validation: (value: boolean) => boolean
    onValueChange: (value: boolean, valid: boolean) => void
}

export function BooleanInput(props: Partial<Props>) {
    const {
        value,
        validation,
        required,
        disabled,
        onValueChange,
        ...rest
    } = props

    // --------------------- Validation -------------------------

    const validate = (value: Props["value"]) => {
        if (required && (value === undefined || value === null)) {
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
    }, [validation])

    // ------------------- Event Handlers ----------------------

    const handleValueChange = (value: Props["value"]) => {
        if (disabled || value === state.value) {
            return
        }

        const valid = validate(value)

        onValueChange(value, valid)

        setState({
            value,
            valid,
        })
    }

    const flipValue = () => {
        handleValueChange(!state.value)
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
        <Frame
            {...rest}
            variants={variants}
            initial={currentVariant}
            animate={currentVariant}
            onTap={flipValue}
        >
            <Frame
                height={"100%"}
                width={"50%"}
                x={state.value ? "100%" : "0%"}
            />
        </Frame>
    )
}

BooleanInput.defaultProps = {
    value: false,
    required: false,
    disabled: false,
    validation: (value: boolean) => true,
    onValueChange: (value: boolean, valid: boolean) => null,
}

addPropertyControls(BooleanInput, {
    value: {
        title: "Value",
        type: ControlType.Boolean,
        defaultValue: false,
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
