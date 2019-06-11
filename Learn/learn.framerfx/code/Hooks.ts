import * as React from "react"
import { motionValue, MotionValue } from "framer"

export type InteractiveOptions = {
    hover: boolean
    active: boolean
    enabled: boolean
    disabled: boolean
    toggled: boolean
    style: any
}

export const useInteractionState: (
    options: Partial<InteractiveOptions>
) => [
    string,
    {
        onHoverStart: () => void
        onHoverEnd: () => void
        onMouseDown: () => void
        onMouseUp: () => void
        onTapCancel: () => void
        style: any
    }
] = (options = {}) => {
    const {
        hover = true,
        active = true,
        enabled = true,
        disabled = false,
        toggled = false,
        style = {},
    } = options

    const [state, setState] = React.useState({
        isHovered: false,
        isActive: false,
    })

    // Set the hovered state when the user mouses in or out
    const setHover = (isHovered: boolean) =>
        enabled &&
        !disabled &&
        hover &&
        setState({ ...state, isHovered: isHovered })

    // Set the active state when the user mouses down or up
    const setActive = (isActive: boolean) =>
        enabled &&
        !disabled &&
        active &&
        setState({ ...state, isActive: isActive })

    const clearActiveHovered = () =>
        enabled &&
        !disabled &&
        setState({ ...state, isActive: false, isHovered: false })

    // Determine which interaction state to return
    const current = toggled
        ? "toggled"
        : state.isActive
        ? "active"
        : state.isHovered
        ? "hovered"
        : "initial"

    return [
        current,
        {
            opacity: disabled ? 0.3 : 1,
            onHoverStart: () => setHover(true),
            onHoverEnd: () => setHover(false),
            onMouseDown: () => setActive(true),
            onMouseUp: () => setActive(false),
            onTapCancel: () => clearActiveHovered(),
            style: {
                ...style,
                cursor: enabled && !disabled ? "pointer" : undefined,
            },
        },
    ]
}

// Not quite ready
//
// export const useResize: (
//     props: any,
//     ...refs: any[]
// ) => [MotionValue<number>, MotionValue<number>] = (props, ...refs) => {
//     const width = motionValue<number>(props.size || props.width)
//     const height = motionValue<number>(props.size || props.height)

//     React.useLayoutEffect(() => {
//         console.log("running")
//         const size = refs.reduce(
//             (acc, cur) => {
//                 console.log(cur, cur.current)
//                 if (cur.current) {
//                     acc.height += cur.current.offsetHeight
//                     acc.width += cur.current.offsetWidth
//                 }
//                 return acc
//             },
//             { height: 0, width: 0 }
//         )

//         width.set(size.width)
//         height.set(size.height)
//     }, [])

//     return [width, height]
// }
