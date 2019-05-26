import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Docs(props) {
    const { page } = props
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#FFFFFF",
            }}
        >
            <iframe
                title="Learn Docs"
                width="100%"
                height="100%"
                src={"https://framer-learn-docs.netlify.com/" + page}
                style={{
                    height: "100%",
                    width: "100%",
                }}
            />
        </div>
    )
}

Docs.defaultProps = {
    height: 812,
    width: 600,
    page: " ",
}

addPropertyControls(Docs, {
    page: {
        type: ControlType.Enum,
        options: [" ", "button", "checkbox"],
        optionTitles: ["Home", "Button", "Checkbox"],
        defaultValue: " ",
    },
})
