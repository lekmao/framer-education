import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"

type Props = FrameProps & {
    text: string
}

export function Button(props: Props) {
    const { text, style, ...rest } = props

    return (
        <Frame
            {...rest}
            style={{
                ...style,
            }}
        >
            {text}
        </Frame>
    )
}

Button.defaultProps = {
    height: 64,
    width: 200,
    text: "Get started",
}

// [12]
addPropertyControls(Button, {
    text: {
        type: ControlType.String,
        defaultValue: "Get Started",
    },
})
