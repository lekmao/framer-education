import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function ComponentInstance(props) {
    const { frame } = props

    return (
        <Frame size={"100%"}>
            {frame[0] &&
                React.cloneElement(frame[0], {
                    size: "100%",
                })}
        </Frame>
    )
}

ComponentInstance.defaultProps = {
    frame: undefined,
}

addPropertyControls(ComponentInstance, {
    frame: {
        title: "Frame",
        type: ControlType.ComponentInstance,
    },
})
