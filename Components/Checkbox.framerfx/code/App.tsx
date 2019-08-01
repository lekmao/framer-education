import * as React from "react"
import { Override, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const appState = Data({
    top: false,
    right: false,
    bottom: false,
    left: false,
})

const borders = ["top", "right", "bottom", "left"]

export function BordersCheckbox(props): Override {
    const some = borders.some(b => appState[b])
    const all = borders.every(b => appState[b])

    return {
        checked: all,
        indeterminate: some && !all,
        onValueChange: next => {
            borders.forEach(b => {
                appState[b] = next
            })
        },
    }
}

export function Checkbox(props): Override {
    const { name } = props

    React.useEffect(() => {
        const [checkbox] = props.children
        appState[name] = checkbox.props.checked
    }, [])

    return {
        checked: appState[name],
        onValueChange: checked => {
            appState[name] = checked
        },
    }
}

export function Box(props): Override {
    const borderWidths = borders.map(b => {
        return appState[b] ? "4px" : "0"
    })

    return {
        border: "4px solid #0099FF",
        style: {
            borderWidth: borderWidths.join(" "),
        },
    }
}
