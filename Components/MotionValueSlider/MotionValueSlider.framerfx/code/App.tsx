import { Override, Data, motionValue } from "framer"

// Override Docs: https://framer.com/docs/overrides

const appState = Data({
    value: "0",
})

const mv = motionValue(0)

mv.onChange(v => (appState.value = v.toFixed(2)))

export function SliderA(): Override {
    return {
        value: mv,
    }
}
export function SliderB(): Override {
    return {
        value: mv,
        onValueChange: v => console.log(v),
    }
}

export function Label(): Override {
    return {
        text: appState.value,
    }
}
