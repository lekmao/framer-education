import * as React from "react"
import { Frame, FrameProps } from "framer"

type Props = Partial<FrameProps> & {
    userName: string
}

export function BasicExample(props: Props) {
    // Pull out your custom props from props
    const { userName, ...rest } = props

    // Pass all the other props to your container
    return <Frame {...rest}>{userName}</Frame>
}
