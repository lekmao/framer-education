import * as React from "react"
import { Override, Data } from "framer"

// Gallery
// @steveruizok

const state = Data({
    containerSize: {
        width: 0,
        height: 0,
    },
    zoomedImage: null as any,
    frontImage: null as any,
})

export function Container(props): Override {
    // [1]
    React.useEffect(() => {
        state.containerSize.width = props.width
        state.containerSize.height = props.height
    }, [])
    return {}
}

export function GalleryImage(props): Override {
    // [2]
    const isZoomed = state.zoomedImage === props.name

    // [3]
    const isFront = state.frontImage === props.name

    return {
        onTap: () => {
            // [4]
            if (isZoomed) {
                state.zoomedImage = null
                // [5]
            } else {
                state.zoomedImage = props.name
                state.frontImage = props.name
            }
        },
        // [6]
        style: {
            zIndex: isFront ? 999 : 1,
        },
        // [7]
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
                ...state.containerSize, // [8]
            },
        },
        transition: {
            type: "tween",
            easing: "easeOut",
            duration: 0.25,
        },
        // [9]
        animate: isZoomed ? "zoomed" : "initial",
    }
}

export function Title(props): Override {
    return {
        text: state.frontImage,
        opacity: 0,
        animate: {
            opacity: state.zoomedImage ? 1 : 0,
        },
        transition: {
            type: "tween",
            duration: 0.2,
            ease: "easeOut",
        },
    }
}

/* Notes ______________________________

[1]
When the project starts, set the container size with
the props of this override's connected frame. We'll
use a `useEffect` hook to make sure this only runs once.

[2]
Each time this override runs, we want to know whether
the gallery image is the zoomed one. We can get this
by checking to see whether the state's `zoomedImage` 
property matches this image's name prop. If it does,
then this image is "zoomed".

[3]
We also want to know whether the image is in front of all
of the other images. We use the same trick, but checking
against `frontImage`.

[4]
When we tap on an image, we want to do different things
depending on whether the image is already zoomed. If it
is, then we want to zoom it out - by clearing the state's
`zoomedImage` property.

[5]
But if it's not, then we want to do two things: first,
set the state's `zoomedImage` property with this image's
name prop. Next, set the `frontImage` to this image's
name prop too.

[6]
The `zIndex` style prop is a measure of a Frame's "back-to-front"ness: 
when frames overlap, whatever item has the higher `zIndex` will
appear in front of the other. In our case, we want the
this image to have an arbitrarily high `zIndex` if it's the 
front one.

[7]
Each image will have two variants: an `initial` or "unzoomed"
variant with no transforms at all, and a `zoomed` variant
that gets the `height` and `width` from the state's 
`containerSize` property, and calculates an `x` and `y`
based on the image's starting position within the container.

[8]
We use the `...` spread operator to say "also, every property 
from the state.containerSize object," which will insert that
object's height and width.

[9]
Finally, we want to animate between these variants depending
on whether the image is the zoomed one or not.
*/
