import * as React from "react"
import { Override, useCycle, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const container = {
    width: 720,
    height: 472,
}

export function Scale(props): Override {
    const zoom = {
        y: -props.top,
        x: -props.left,
    }

    const [state, setState] = React.useState({
        isZoomed: false,
        isForward: false,
    })

    const { isZoomed, isForward } = state

    return {
        onTap: () => {
            setState({
                isForward: true,
                isZoomed: !isZoomed,
            })
        },
        style: {
            ...props.style,
            zIndex: isForward ? 999 : 0,
        },
        onAnimationComplete: () => {
            setState({
                ...state,
                isForward: isZoomed ? true : false,
            })
        },
        animate: {
            x: isZoomed ? zoom.x : 0,
            y: isZoomed ? zoom.y : 0,
            // z: zoomed ? 999 : 0,
            width: isZoomed ? container.width : props.width,
            height: isZoomed ? container.height : props.height,
            transition: {
                type: "tween",
                easing: "easeOut",
                duration: 0.25,
            },
        },
    }
}
