import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"

type Props = {
    id: string
    value: number
    step: number
    width: number
    height: number
    disabled: boolean
    tint: string
    accent: string
    onValueChange: (value: number, valid: boolean) => void
    validation: (value: number) => boolean
}

/**
 * Stepper
 * @param props
 */
export function Stepper(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming value to avoid conflicting with the state's value
    // property
    const {
        value: initialValue,
        step,
        disabled,
        validation,
        onValueChange,
        id,
        width,
        tint,
        accent,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        valid: validation(initialValue),
        hovered: false,
        active: false,
        hoveredButton: null,
        activeButton: null,
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        setState({
            ...state,
            value: initialValue,
            valid: validation(initialValue),
        })
    }, [initialValue])

    /* ----------------------------- Event Handlers ----------------------------- */

    // Set the hovered state when the user mouses in or out
    const setHover = (hovered: boolean) => {
        setState(state => ({
            ...state,
            hovered,
            active: hovered ? state.active : false,
            hoveredButton: hovered ? state.hoveredButton : null,
            activeButton: hovered ? state.activeButton : null,
        }))
    }

    // Set the active state when the user mouses down or up
    const setActive = (active: boolean) => {
        setState(state => ({
            ...state,
            active,
        }))
    }

    // Set the hovered state of an option when the user mouses in or out
    const setHoveredButton = (button: string) => {
        setState(state => ({
            ...state,
            hoveredButton: button,
        }))
    }

    // Set the active state of an option when the user mouses down or up
    const setActiveButton = (button: string) => {
        setState(state => ({
            ...state,
            activeButton: button,
        }))
    }

    // When the user selects an option, updatet state and run onValueChange
    const handleTap = (delta: number) => {
        if (disabled) return

        setState(state => {
            const value = (state.value += delta * step)

            const valid = validation(value)

            onValueChange(value, valid)

            return {
                ...state,
                value,
                valid,
            }
        })
    }

    /* ------------------------------ Presentation ------------------------------ */

    // Grab the properties we want to use from state
    const { value, hovered, active, valid, hoveredButton, activeButton } = state

    const tintColor = Color(tint)
    const accentColor = Color(accent)

    // Define some variants
    const variants = {
        initial: {
            border: `2px solid ${tint}`,
        },
        hovered: {
            border: `2px solid ${Color.brighten(tintColor, 10).toValue()}`,
        },
        active: {
            border: `2px solid ${Color.brighten(tintColor, 15).toValue()}`,
        },
    }

    // Decide which variant to use
    const currentVariant = disabled
        ? "initial"
        : active
        ? "active"
        : hovered
        ? "hovered"
        : "initial"

    // Define a set of variants for our options
    const buttonVariants = {
        initial: {
            background: Color.alpha(tintColor, 0),
            color: tintColor,
        },
        hovered: {
            background: Color.alpha(tintColor, 0),
            color: accent,
        },
        active: {
            background: Color.alpha(tintColor, 0.5),
            color: accent,
        },
    }

    // A helper to get each button's current variant
    const getButtonVariant = (button: string) => {
        const hovered = button === hoveredButton
        const active = button === activeButton

        return disabled
            ? "initial"
            : active
            ? "active"
            : hovered
            ? "hovered"
            : "initial"
    }

    // Get each button's current variant
    const incrementCurrent = getButtonVariant("increment")

    const decrementCurrent = getButtonVariant("decrement")

    return (
        <Frame
            // Pass in container props when using this component in code
            {...props as any}
            // Constants
            size="100%"
            borderRadius={4}
            overflow="hidden"
            background="none"
            color={accent}
            opacity={disabled ? 0.3 : 1}
            shadow={valid ? "none" : "0 2px 0px 0px #8855ff"}
            style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 600,
            }}
            // Variants
            variants={variants}
            initial={currentVariant}
            animate={currentVariant}
            // Events
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
        >
            <Frame
                key={`${id}_option_decrement`}
                width={width / 3}
                height="100%"
                left={0}
                top={0}
                color={accent}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: `2px solid ${tint}`,
                    paddingLeft: 4,
                    paddingBottom: 4,
                    fontSize: 24,
                }}
                // Variants
                variants={buttonVariants}
                initial={decrementCurrent}
                animate={decrementCurrent}
                // Events
                onMouseEnter={() => setHoveredButton("decrement")}
                onMouseDown={() => setActiveButton("decrement")}
                onMouseUp={() => setActiveButton(null)}
                onClick={() => handleTap(-1)}
            >
                -
            </Frame>
            {value.toString()}
            <Frame
                key={`${id}_option_increment`}
                width={width / 3}
                height="100%"
                left={(width / 3) * 2}
                top={0}
                color={accent}
                transition={{
                    type: "tween",
                    duration: 0.16,
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderLeft: `2px solid ${tint}`,
                    paddingRight: 4,
                    paddingBottom: 4,
                    fontSize: 24,
                }}
                // Variants
                variants={buttonVariants}
                initial={incrementCurrent}
                animate={incrementCurrent}
                // Events
                onMouseEnter={() => setHoveredButton("increment")}
                onMouseDown={() => setActiveButton("increment")}
                onMouseUp={() => setActiveButton(null)}
                onClick={() => handleTap(1)}
            >
                +
            </Frame>
        </Frame>
    )
}

// Set the component's default properties
Stepper.defaultProps = {
    value: 0,
    step: 1,
    width: 200,
    height: 50,
    disabled: false,
    tint: "#027aff",
    accent: "#FFFFFF",
    onValueChange: () => null,
    validation: () => true,
}

// Set the component's property controls
addPropertyControls(Stepper, {
    value: {
        type: ControlType.Number,
        step: 1,
        min: 0,
        max: 100,
        displayStepper: true,
        defaultValue: 0,
        title: "Value",
    },
    step: {
        type: ControlType.Number,
        step: 1,
        min: 0,
        max: 50,
        displayStepper: true,
        defaultValue: 1,
        title: "Step",
    },
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
    tint: {
        type: ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
})
