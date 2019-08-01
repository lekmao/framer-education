import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function ComponentArray(props) {
    const { frame, frames } = props

    const content = frames.map(frame =>
        React.cloneElement(frame, {
            size: "100%",
        })
    )

    return <Frame size={"100%"}>{content[frame]}</Frame>
}

ComponentArray.defaultProps = {
    frame: 0,
    frames: [],
}

addPropertyControls(ComponentArray, {
    frame: {
        title: "Frame",
        type: ControlType.Number,
        min: 0,
        step: 1,
        defaultValue: 0,
        displayStepper: true,
    },
    frames: {
        title: "Frames",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
    },
})
