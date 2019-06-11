import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { colors } from "./canvas"

export function Modal(props) {
    const { id, open, onOpen, onClose, children, ...rest } = props

    /* ---------------------------------- State --------------------------------- */

    const [state, setState] = React.useState({
        open,
    })

    // Update state when props.open changes
    React.useEffect(() => {
        setState({
            ...state,
            open,
        })
    }, [open])

    /* ----------------------------- Event Handlers ----------------------------- */

    const handleAnimationEnd = () => {
        if (state.open) {
            props.onOpen()
        } else {
            props.onClose()
        }
    }

    /* ------------------------------ Presentation ------------------------------ */

    return (
        <Frame
            {...rest}
            background={colors.Shadow}
            variants={{
                open: {
                    opacity: 1,
                    transition: {
                        type: "tween",
                        ease: "easeIn",
                        delay: 0.15,
                        duration: 0.25,
                    },
                },
                closed: {
                    opacity: 0,
                    transition: {
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.25,
                    },
                },
            }}
            onAnimationEnd={handleAnimationEnd}
            initial={state.open ? "open" : "closed"}
            animate={state.open ? "open" : "closed"}
            style={{
                pointerEvents: state.open ? "all" : "none",
            }}
        >
            <Stack
                size="100%"
                alignment="center"
                distribution="center"
                paddingBottom={24}
                background="none"
                variants={{
                    closed: {
                        opacity: 0,
                        scale: 0.95,
                        y: 16,
                        transition: {
                            type: "tween",
                            ease: "easeIn",
                            duration: 0.1,
                            delay: 0.15,
                        },
                    },
                    open: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            type: "tween",
                            ease: "easeOut",
                            duration: 0.18,
                        },
                    },
                }}
            >
                {children}
            </Stack>
        </Frame>
    )
}

Modal.defaultProps = {
    height: 714,
    width: 375,
    open: false,
    onOpen: () => null,
    onClose: () => null,
}

addPropertyControls(Modal, {
    open: {
        title: "Open",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
