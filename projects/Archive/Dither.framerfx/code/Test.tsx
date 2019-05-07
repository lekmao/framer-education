import * as React from "react"
import { Frame, useCycle } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Test() {
    const [twist, cycle] = useCycle(
        { scale: 0.5, rotate: 0 },
        { scale: 1, rotate: 90 }
    )

    return (
        <Frame
            height={50}
            width={80}
            center
            borderRadius={25}
            onTap={flipSwitch}
            variants={{
                off: { background: "#BBBBBB" },
                on: { background: "#0070DF" },
            }}
            initial={props.isOn ? "on" : "off"}
            animate={state.isOn ? "on" : "off"}
            transition={{
                type: "tween",
                duration: 0.2,
            }}
        >
            <Frame
                size={46}
                top={2}
                left={2}
                borderRadius={"100%"}
                background="#FFFFFF"
                variants={{
                    off: { x: 0 },
                    on: { x: 30 },
                }}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
            />
        </Frame>
    )
}
