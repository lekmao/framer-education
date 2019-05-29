import * as React from "react"
import {
    Frame,
    Color,
    addPropertyControls,
    FrameProps,
    ControlType,
} from "framer"

// Define a type for our props
interface Props extends FrameProps {
    height: any
    width: any
    disabled: boolean
    pressed: boolean
    active: boolean
    hover: boolean
    type: string
}

/**
 * Button
 * @param props
 */
export function Interactive(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming toggled to avoid conflicting with the state's toggled
    // property
    const {
        active: doActive,
        hover: doHover,
        children,
        disabled,
        pressed,
        overflow,
        center,
        size,
        height,
        width,
        drag,
        dragConstraints,
        dragDirectionLock,
        onClick,
        onTap,
        onTapStart,
        onTapCancel,
        onMouseEnter,
        onMouseLeave,
        whileTap,
        whileHover,
        rotate,
        onDrag,
        onDragStart,
        onDragEnd,
        borderRadius,
        top,
        left,
        bottom,
        right,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Initialize state with props values
    const [state, setState] = React.useState({
        hovered: false,
        active: false,
    })

    /* ----------------------------- Event Handlers ----------------------------- */

    // Set the hovered state when the user mouses in or out
    const setHover = (hovered: boolean) =>
        doHover && setState({ ...state, hovered })

    // Set the active state when the user mouses down or up
    const setActive = (active: boolean) =>
        doActive && setState({ ...state, active })

    const clearActiveHovered = () =>
        setState({ ...state, active: false, hovered: false })

    /* ------------------------------ Presentation ------------------------------ */

    // Grab the properties we want to use from state
    const { hovered, active } = state

    const variants = {
        initial: {
            opacity: 1,
        },
        hovered: {
            opacity: 1,
        },
        active: {
            opacity: 1,
        },
        pressed: {
            opacity: 1,
        },
        disabled: {
            opacity: 0.3,
        },
    }

    // Determine which variant to show
    const current = disabled
        ? pressed
            ? "pressed"
            : "disabled"
        : pressed
        ? "pressed"
        : active
        ? "active"
        : hovered
        ? "hovered"
        : "initial"

    return (
        <Frame
            {...{
                size,
                height,
                width,
                center,
                top,
                left,
                bottom,
                right,
                borderRadius,
                overflow,
                rotate,
                onClick,
                onTap,
                onTapStart,
                onTapCancel,
                onMouseEnter,
                onMouseLeave,
                onDrag,
                onDragStart,
                onDragEnd,
                whileTap,
                whileHover,
                drag,
                dragConstraints,
                dragDirectionLock,
            }}
            background={null}
            // Constant props
            // Variant props
            variants={variants}
            initial={current}
            animate={current}
            transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.12,
            }}
            style={{
                ...props.style,
                cursor: doHover || doActive || onTap ? "pointer" : undefined,
            }}
            // Events
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onTapCancel={() => clearActiveHovered()}
            // Pass in container props when using this component in code
        >
            {typeof children === "function" ? children(current) : children}
        </Frame>
    )
}

// Set the component's default properties
Interactive.defaultProps = {
    height: 60,
    width: 200,
    disabled: false,
    active: true,
    hover: true,
    onTap: () => null,
}

// Set the component's property controls
addPropertyControls(Interactive, {
    pressed: {
        type: ControlType.Boolean,
        title: "Pressed",
        defaultValue: false,
    },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: false,
    },
})
