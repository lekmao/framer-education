import * as React from "react"
import {
    Frame,
    Stack,
    FrameProps,
    addPropertyControls,
    ControlType,
} from "framer"

// String Input
// @steveruizok

type Props = FrameProps & {
    value: string
    placeholder: string
    readOnly: boolean
    password: boolean
    required: boolean
    disabled: boolean
    validation: (value: string) => boolean
    onFocus: (value: string) => void
    onBlur: (value: string) => void
    onValueChange: (value: string, valid: boolean) => void
}

export function StringInput(props: Partial<Props>) {
    const {
        value,
        placeholder,
        readOnly,
        password,
        validation,
        required,
        disabled,
        onValueChange,
        onFocus,
        onBlur,
        ...rest
    } = props

    // --------------------- Validation -------------------------

    const validate = (value: Props["value"]) => {
        if (
            required &&
            (value.length === 0 || value === undefined || value === null)
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
        >
            <input
                value={state.value}
                type={password ? "password" : "text"}
                readOnly={readOnly}
                disabled={disabled}
                placeholder={placeholder}
                onChange={e => handleValueChange(e.target.value)}
                onFocus={e => onFocus(state.value)}
                onBlur={e => onBlur(state.value)}
                style={{
                    height: "100%",
                    width: "100%",
                }}
            />
        </Stack>
    )
}

StringInput.defaultProps = {
    value: "",
    placeholder: "",
    password: false,
    readOnly: false,
    required: false,
    disabled: false,
    validation: value => true,
    onFocus: value => null,
    onBlur: value => null,
    onValueChange: (value, valid) => null,
}

addPropertyControls(StringInput, {
    value: {
        title: "Value",
        type: ControlType.String,
        defaultValue: "",
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "",
    },
    password: {
        title: "Password",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    readOnly: {
        title: "ReadOnly",
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
