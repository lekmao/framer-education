import * as React from "react"
import { Override, useCycle, Data } from "framer"

const store = Data({
    containerSize: {
        width: 0,
        height: 0,
    },
    zoomedImage: null as any,
})

export function Container(props): Override {
    React.useEffect(() => {
        store.containerSize = {
            width: props.width,
            height: props.height,
        }
    }, [])
    return {}
}

export function GalleryImage(props): Override {
    const [zIndex, setZIndex] = React.useState(1)

    const isZoomed = store.zoomedImage === props.name

    return {
        onTap: () => {
            if (!isZoomed) {
                store.zoomedImage = props.name
                setZIndex(999)
            } else {
                store.zoomedImage = null
            }
        },
        style: {
            zIndex,
        },
        variants: {
            initial: {
                x: 0,
                y: 0,
                width: props.width,
                height: props.height,
            },
            zoomed: {
                x: -props.left,
                y: -props.top,
                ...store.containerSize,
            },
        },
        transition: {
            type: "tween",
            easing: "easeOut",
            duration: 0.25,
        },
        onAnimationComplete: () => {
            if (!isZoomed) {
                setZIndex(1)
            }
        },
        animate: isZoomed ? "zoomed" : "initial",
    }
}

export function Scrim(props): Override {
    return {
        variants: {
            hidden: {
                opacity: 0,
            },
            shown: {
                opacity: 1,
            },
        },
        animate: store.zoomedImage ? "shown" : "hidden",
        transition: {
            type: "tween",
            easing: "easeOut",
            duration: 0.2,
        },
    }
}

export function ImageTitle(props): Override {
    return {
        text: store.zoomedImage,
    }
}
