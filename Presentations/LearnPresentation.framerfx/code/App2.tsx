import { Override } from "framer"

// Override Docs: https://framer.com/docs/overrides

export function Flow(): Override {
    return {
        variants: {
            behind: {
                x: -32,
                scale: 0.96,
                opacity: 0,
                transition: {
                    type: "tween",
                    ease: "easeIn",
                    duration: 0.35,
                },
            },
            current: {
                x: 0,
                scale: 1,
                opacity: 1,
                transition: {
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.35,
                    delay: 0.25,
                },
            },
            ahead: {
                x: 32,
                scale: 0.96,
                opacity: 0,
                transition: {
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.35,
                },
            },
        },
    }
}
