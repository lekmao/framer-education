import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"

// Boolean Input
// @steveruizok

type Props = FrameProps & {
    value: boolean
    disabled: boolean
    onValueChange: (value: boolean) => void
}

export function BooleanInput(props: Partial<Props>) {
    const { value, disabled, onValueChange, ...rest } = props

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
        if (disabled || value === state.value) {
            return
        }

        onValueChange(value)

        setState({
            value,
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
        disabled: {
            opacity: 0.3,
            border: `1px solid #777`,
        },
    }

    const currentVariant = disabled ? "disabled" : "initial"

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
    disabled: false,
    onValueChange: (value: boolean) => {},
}

addPropertyControls(BooleanInput, {
    value: {
        title: "Value",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
