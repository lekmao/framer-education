import * as React from "react"
import {
    Data,
    motionValue,
    transform,
    useTransform,
    Override,
    useAnimation,
} from "framer"

const data = Data({
    loadingState: "idle", // loading, loaded
})

const scrollY = motionValue(0)

export function Scroll(): Override {
    return {
        contentOffsetY: scrollY,
        dragEnabled: data.loadingState === "idle",
        onPanEnd: () => {
            if (data.loadingState === "idle" && scrollY.get() > 72) {
                data.loadingState = "loading"
                setTimeout(() => (data.loadingState = "complete"), 1500)
            }
        },
    }
}

export function Content(): Override {
    return {
        animate: {
            y: data.loadingState === "loading" ? 104 : 0,
        },
        onAnimationComplete: () => {
            if (data.loadingState === "complete") {
                data.loadingState = "idle"
            }
        },
    }
}

export function Spinner(): Override {
    const idleOpacity = useTransform(scrollY, [64, 80], [0, 1])
    const idleY = useTransform(scrollY, [0, 96], [-64, 0])

    const y = useTransform(idleY, v => {
        return data.loadingState === "loading" ? 0 : v
    })

    const opacity = useTransform(idleOpacity, v => {
        return data.loadingState === "loading" ? 1 : v
    })

    return {
        y,
        opacity,
        animate:
            data.loadingState === "loading"
                ? {
                      rotate: 360,
                      transition: {
                          curve: "tween",
                          ease: "linear",
                          loop: Infinity,
                          duration: 1,
                      },
                  }
                : {
                      rotate: 0,
                      transition: {
                          curve: "tween",
                          ease: "linear",
                          duration: 0,
                      },
                  },
    }
}
