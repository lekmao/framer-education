import { Override, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const state = Data({
    disabled: false,
    warn: false,
})

export function Input(): Override {
    return {
        disabled: state.disabled,
        validation: state.warn ? () => false : () => true,
    }
}

export function SetDisabled(): Override {
    return {
        value: state.disabled,
        onValueChange: v => (state.disabled = v),
    }
}

export function SetWarn(): Override {
    return {
        value: state.warn,
        onValueChange: v => (state.warn = v),
    }
}
