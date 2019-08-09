import * as React from "react"
import { Override, motionValue } from "framer"
import { useStickyHeader } from "./useStickyHeader"

const scrollY = motionValue(0)

export function Scroll(): Override {
    return {
        contentOffsetY: scrollY,
    }
}

export function StickyHeader(props): Override {
    const [ref, y] = useStickyHeader(scrollY)
    return {
        ref,
        y,
    }
}
