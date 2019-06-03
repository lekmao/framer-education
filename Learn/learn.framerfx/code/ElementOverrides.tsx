import { Override, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const state = Data({
    values: [0, 0, 0],
    prices: [0.25, 0.5, 1.2],
})

export function StepperA(): Override {
    return {
        value: state.values[0],
        onValueChange: v => {
            const values = state.values
            values[0] = v
            state.values = values
        },
    }
}

export function StepperB(): Override {
    return {
        value: state.values[1],
        onValueChange: v => {
            const values = state.values
            values[1] = v
            state.values = values
        },
    }
}

export function StepperC(): Override {
    return {
        value: state.values[2],
        onValueChange: v => {
            const values = state.values
            values[2] = v
            state.values = values
        },
    }
}

export function Total(): Override {
    console.log(state.values)
    return {
        text:
            "$" +
            state.values
                .reduce((a, c, i) => a + c * state.prices[i])
                .toFixed(2),
    }
}

export function Segment(): Override {
    return {
        validation: v => v === "Red",
    }
}

export function CheckboxGroup(): Override {
    return {
        validation: v => v.includes("Red"),
    }
}

export function RadioGroup(): Override {
    return {
        validation: v => v === "Red",
    }
}
export function Slider(): Override {
    return {
        validation: v => v > 20,
        // onValueChange: (a, b, c) => console.log(a, b, c),
    }
}
