import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function Optimized(props) {
    const { frame, frames } = props

    const content = React.useMemo(
        () =>
            frames.map(frame =>
                React.cloneElement(frame, {
                    size: "100%",
                })
            ),
        [frames]
    )

    return <Frame size={"100%"}>{content[frame]}</Frame>
}

Optimized.defaultProps = {
    frame: 0,
    frames: [],
}

addPropertyControls(Optimized, {
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
