import * as React from "react"
import { transform, useTransform, MotionValue } from "framer"

type States = "open" | "closed" | "opening" | "closing"

/**
 * ## useScrollHeader
 * - `scrollY`: A motion value shared with a scroll's `contentOffsetY` prop
 * - `options`: An object of options for the header
 *   - `closeHeight`: The header's height when closed
 *   - `closeDistance`: The scroll distance required to fully close the header
 *   - `closePadding: The extra scroll distance before starting to close
 *   - `openHeight`: The header's height when open
 *   - `openDistance`: The scroll distance required to fully open the header
 *   - `openPadding`: The extra scroll distance before starting to open
 */
export const useScrollHeader: (
    scrollY: MotionValue<number>,
    options?: {
        closeHeight?: number
        openHeight?: number
        openDistance?: number
        closeDistance?: number
        closePadding?: number
        openPadding?: number
    }
) => MotionValue<number> = (scrollY, options = {}) => {
    const {
        closeHeight = 0,
        openHeight = 128,
        openDistance = 128,
        closeDistance = 240,
        closePadding = 0,
        openPadding = 0,
    } = options

    const stateRef = React.useRef<States>("open")
    const startRef = React.useRef(0)
    const prevRef = React.useRef(0)

    return useTransform(scrollY, y => {
        // Get change between this scrollY and last
        const delta = y - prevRef.current

        // Update prevRef
        prevRef.current = y

        // Get the current reference point for distance
        const start = startRef.current

        // Get distance between current and start
        const distance = y - start

        // Actions for the four possible states
        const states = {
            open: () => {
                if (delta < 0) {
                    stateRef.current = "closing"
                }

                startRef.current = Math.min(y, 0)
                return openHeight
            },
            closed: () => {
                if (delta > 0) {
                    stateRef.current = "opening"
                }

                startRef.current = y
                return closeHeight
            },
            closing: () => {
                if (distance <= -closeDistance - closePadding) {
                    startRef.current = y
                    stateRef.current = "closed"
                } else if (distance > 0) {
                    stateRef.current = "open"
                }

                return transform(
                    y + closePadding,
                    [start - closeDistance, start],
                    [closeHeight, openHeight]
                )
            },
            opening: () => {
                if (distance >= openDistance + openPadding) {
                    startRef.current = y
                    stateRef.current = "open"
                } else if (distance < 0) {
                    stateRef.current = "closed"
                }

                return transform(
                    y - openPadding,
                    [start, start + openDistance],
                    [closeHeight, openHeight]
                )
            },
        }

        // Run the header's height
        // depending on the header's state
        return states[stateRef.current]()
    })
}
