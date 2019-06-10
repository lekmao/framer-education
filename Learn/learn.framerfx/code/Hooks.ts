import * as React from "react"

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
