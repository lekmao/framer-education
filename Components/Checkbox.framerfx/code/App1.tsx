import { Override } from "framer"

// Override Docs: https://framer.com/docs/overrides

export function Scale(): Override {
    return {
        whileTap: {
            scale: 0.6,
        },
    }
}
