import { Override, motionValue, useAnimation } from "framer"

// Override Docs: https://framer.com/docs/overrides

const scrollOffset = motionValue(0)

export function Scroll(): Override {
    return {
        contentOffsetY: scrollOffset,
    }
}

export function Fader(): Override {
    return {
        scrollOffset,
    }
}
