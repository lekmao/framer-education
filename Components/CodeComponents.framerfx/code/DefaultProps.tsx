import * as React from "react"
import { Frame, FrameProps } from "framer"

type Props = Partial<FrameProps> & {
    userName: string
}

export function DefaultPropsExample(props: Props) {
    const { userName, ...rest } = props

    return <Frame {...rest}>{userName}</Frame>
}

// The two default props, height and width, will determine
// the "intrinsic size" of the component on the canvas
DefaultPropsExample.defaultProps = {
    userName: "Ivan Kemp",
    height: 64,
    width: 256,
}
