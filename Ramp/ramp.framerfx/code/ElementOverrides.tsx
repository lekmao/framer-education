import { Override } from "framer"

// Override Docs: https://framer.com/docs/overrides

export function Invalid(): Override {
    return {
        validation: v => false,
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
