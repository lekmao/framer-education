import { Override, useCycle, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const container = {
    width: 720,
    height: 472,
}

const state = Data({
    canZoom: true,
    zoomed: false,
})

export function Scale(props): Override {
    const [zoomed, cycle] = useCycle(false, true)
    // const zoomed = state.zoomed === props.id

    const zoom = {
        y: -props.top,
        x: -props.left,
    }

    return {
        onTap: () => {
            cycle()
            // if (state.zoomed === props.id) {
            //     state.zoomed = null
            // } else if (!state.zoomed) {
            //     state.zoomed = props.id
            // }
        },
        style: {
            ...props.style,
            zIndex: zoomed ? 999 : 0,
        },
        onAnimationComplete: () => {
            state.canZoom = true
        },
        animate: {
            x: zoomed ? zoom.x : 0,
            y: zoomed ? zoom.y : 0,
            // z: zoomed ? 999 : 0,
            width: zoomed ? container.width : props.width,
            height: zoomed ? container.height : props.height,
            transition: {
                type: "tween",
                easing: "easeOut",
                duration: 0.25,
            },
        },
    }
}
