import * as React from "react"
import { Frame, FrameProps, motionValue } from "framer"
import { colors } from "./canvas"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

type Props = FrameProps & {
    value: number
    duration: number
}

export function ProgressBar(props) {
    const { value, duration, animate, ...rest } = props

    return (
        <Frame {...rest} background="none">
            <Frame
                height={8}
                borderRadius={4}
                center="y"
                width="100%"
                background={colors.Neutral}
            />
            <Frame
                height={8}
                borderRadius={4}
                background={colors.Primary}
                center="y"
                initial={{
                    width: `${value * 100}%`,
                }}
                animate={
                    animate && {
                        width: "100%",
                        transition: {
                            type: "tween",
                            curve: "linear",
                            duration,
                        },
                    }
                }
            />
        </Frame>
    )
}

ProgressBar.defaultProps = {
    height: 40,
    width: 320,
    value: 0.62,
    duration: 1.5,
    animate: true,
}
