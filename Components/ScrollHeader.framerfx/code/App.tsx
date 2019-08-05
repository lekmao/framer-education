import * as React from "react"
import { Override, motionValue } from "framer"
import { useScrollHeader } from "./useScrollHeader"

const scrollY = motionValue(0)

// Connect me to a Frame
export function ScrollHeader(): Override {
    const headerHeight = useScrollHeader(scrollY, {
        openHeight: 128,
        openDistance: 128,
        openPadding: 0,
        closeHeight: 0,
        closeDistance: 320,
        closePadding: 96,
    })

    return {
        height: headerHeight,
    }
}

// Connect me to a Scroll
export function Scroll(): Override {
    return {
        contentOffsetY: scrollY,
    }
}
