import * as React from "react"
import { Override, useCycle, Data } from "framer"

// Gallery
// @steveruizok

const store = Data({
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
        store.containerSize = {
            width: props.width,
            height: props.height,
        }
    }, [])
    return {}
}

export function GalleryImage(props): Override {
    // [2]
    const isZoomed = store.zoomedImage === props.name

    // [3]
    const isFront = store.frontImage === props.name

    return {
        onTap: () => {
            // [4]
            if (isZoomed) {
                store.zoomedImage = null
                // [5]
            } else {
                Object.assign(store, {
                    zoomedImage: props.name,
                    frontImage: props.name,
                })
            }
        },
        // [6]
        z: isFront ? 999 : 1,
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
                ...store.containerSize, // [8]
            },
        },
        transition: {
            type: "tween",
            easing: "easeOut",
            duration: 0.25,
        },
        // [9]
        animate: isZoomed ? "zoomed" : "initial",
        // [10]
        onAnimationComplete: () => {
            if (!isZoomed) {
                store.frontImage = null
            }
        },
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
        initial: "hidden",
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

/* Notes ______________________________

[1]
When the project starts, set the container size with
the props of this override's connected frame. We'll
use a `useEffect` hook to make sure this only runs once.

[2]
Each time this override runs, we want to know whether
the gallery image is the zoomed one. We can get this
by checking to see whether the store's `zoomedImage` 
property matches this image's name prop. If it does,
then this image is "zoomed".

[3]
We also want to know whether the image is in front of all
of the other images. We use the same trick, but checking
against `frontImage`.

[4]
When we tap on an image, we want to do different things
depending on whether the image is already zoomed. If it
is, then we want to zoom it out - by clearing the store's
`zoomedImage` property.

[5]
But if it's not, then we want to do two things: first,
set the store's `zoomedImage` property with this image's
name prop. Next, set the `frontImage` to this image's
name prop too. We're using Object.assign to set both
properties at the same time.

[6]
The `z` prop is a measure of a Frame's "back-to-front"ness: 
when frames overlap, whatever item has the higher `z` will
appear in front of the other. In our case, we want the
this image to have an arbitrarily high `z` if it's the 
front one.

[7]
Each image will have two variants: an `initial` or "unzoomed"
variant with no transforms at all, and a `zoomed` variant
that gets the `height` and `width` from the store's 
`containerSize` property, and calculates an `x` and `y`
based on the image's starting position within the container.

[8]
We use the `...` spread operator to say "also, every property 
from the store.containerSize object," which will insert that
object's height and width.

[9]
Finally, we want to animate between these variants depending
on whether the image is the zoomed one or not.

[10]
Even after we've closed the image, we want it to remain in
front of all of its siblings until after it's done animating
back to its original position. We use the `onAnimationComplete`
event to clear the `frontImage` property on the store.
*/
