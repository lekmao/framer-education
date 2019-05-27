import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Icon } from "./Icon"

export function Docs(props) {
    const { page } = props
    return (
        <Frame size="100%" background="#FFFFFF">
            {
                //     <iframe
                //     title="Learn Docs"
                //     width="100%"
                //     height="100%"
                //     src={"https://framer-learn-docs.netlify.com/" + page}
                //     style={{
                //         height: "100%",
                //         width: "100%",
                //     }}
                // />
            }
            <Frame
                height={50}
                width={50}
                top={0}
                right={0}
                background="none"
                onTap={() =>
                    window.open("https://framer-learn-docs.netlify.com/" + page)
                }
            >
                <Icon icon="open_in_new" />
            </Frame>
        </Frame>
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
