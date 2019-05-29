import { Override } from "framer"
import * as React from "react"

// Override Docs: https://framer.com/docs/overrides

export function Text(): Override {
    const [state, setState] = React.useState({
        value: "Gello world",
        original: "kokokok",
    })

    return {
        value: state.value,
        onValueChange: v => {
            setState({
                ...state,
                value: v,
            })
        },
        onBlur: () => {
            setState({
                ...state,
                value: state.original,
            })
        },
    }
}

export function Text2(): Override {
    return {
        text: "hello",
    }
}
