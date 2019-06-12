import * as React from "react"
import { Scroll, Frame, useMotionValue, useTransform } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function StickyHeader() {
    const activeHeader = 0
    const scrollY = useMotionValue(0)

    return (
        <Frame size="100%">
            <Scroll
                height="100%"
                width="100%"
                contentOffsetY={scrollY}
                contentHeight={1600}
            >
                <Frame height={1600}>
                    <StickyHeaderItem scrollY={scrollY} y={0} text="one" />
                    <StickyHeaderItem scrollY={scrollY} y={400} text="two" />
                    <StickyHeaderItem scrollY={scrollY} y={800} text="three" />
                    <StickyHeaderItem scrollY={scrollY} y={1200} text="four" />
                    <StickyHeaderItem scrollY={scrollY} y={1600} text="five" />
                </Frame>
            </Scroll>
        </Frame>
    )
}

export function StickyHeaderItem(props) {
    const { y, scrollY, onStick, onUnstick, text, ...rest } = props

    const stuck = React.useRef(false)

    const stuckY = useTransform(scrollY, v => {
        if (v < -y) {
            if (!stuck.current) {
                props.onChangeStick(text, true)
                stuck.current = true
            }
            return -v
        } else {
            if (stuck.current) {
                props.onChangeStick(text, false)
                stuck.current = false
            }
            return y
        }
        return v < -y ? -v : y
    })

    return (
        <Frame
            {...rest}
            width="100%"
            background="#efefef"
            height={80}
            y={stuckY}
        >
            {text}
        </Frame>
    )
}

StickyHeaderItem.defaultProps = {
    onChangeStick: () => null,
}
