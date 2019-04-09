import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"

type Props = {
    width: number
    min: number
    max: number
    value: number
    disabled: boolean
    step: number
    knobSize: number
    railHeight: number
    tint: string
    accent: string
    validation: (value: number, progress: number) => boolean
    onValueChange: (value: number, progress: number, valid: boolean) => void
}

/**
 * Slider
 * @param props
 */
export function Slider(props: Partial<Props>) {
    // Grab the properties we want to use from props
    const {
        value: initialValue,
        min,
        max,
        disabled,
        step,
        width,
        knobSize,
        railHeight,
        validation,
        onValueChange,
        tint,
        accent,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Step the incoming value
    const steppedValue = toStep(initialValue - min, step)
    const steppedProgress = (steppedValue - min) / (max - min)

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: steppedValue,
        progress: steppedProgress,
        valid: validation(steppedValue, steppedProgress),
        dragging: false,
        hovered: false,
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        const steppedValue = toStep(initialValue - min, step)
        const steppedProgress = (steppedValue - min) / (max - min)

        setState({
            ...state,
            value: steppedValue,
            progress: steppedProgress,
            valid: validation(steppedValue, steppedProgress),
        })
    }, [initialValue, min, max])

    /* ----------------------------- Event Handlers ----------------------------- */

    // Set the hovered state when the user mouses in or out
    const setHover = (hovered: boolean) => setState({ ...state, hovered })

    // Set the dragging state when the user begins and end a drag
    const setDragging = (dragging: boolean) => setState({ ...state, dragging })

    // When the user drags the knob, run onValueChange and update state
    const handleDrag = (event, detail) => {
        if (disabled) return

        let normal = detail.point.x / (width - knobSize)

        const value = min + (max - min) * normal

        const steppedValue = toStep(min + (max - min) * normal, step)

        const steppedProgress = (steppedValue - min) / (max - min)

        const valid = validation(steppedValue, steppedProgress)

        onValueChange(value, steppedProgress, valid)

        setState(state => {
            return {
                ...state,
                dragging: true,
                value: steppedValue,
                progress: steppedProgress,
            }
        })
    }

    /* ------------------------------ Presentation ------------------------------ */

    // Get the properties we want from state
    const { value, valid, progress, dragging, hovered } = state

    // Determine the widths of our rail and fill
    const railWidth = width - knobSize
    const fillWidth = railWidth * progress

    const tintColor = Color(tint)
    const accentColor = Color(accent)

    return (
        <Frame
            center
            height={railHeight}
            width={width - knobSize}
            borderRadius={railHeight / 2}
            opacity={disabled ? 0.3 : 1}
            background={Color.alpha(tintColor, 0.5)}
            shadow={valid ? "none" : "0 2px 0px 0px #8855ff"}
        >
            <Frame
                center={"y"}
                height={railHeight}
                width={fillWidth}
                background={tint}
                borderRadius={railHeight / 2}
            />
            <Frame
                size={knobSize}
                top={-knobSize / 2 + railHeight / 2}
                left={-knobSize / 2}
                x={dragging ? undefined : fillWidth}
                borderRadius="100%"
                background={accent}
                drag={disabled ? false : "x"}
                dragMomentum={false}
                dragElastic={false}
                dragConstraints={{
                    left: 0,
                    right: width - knobSize,
                }}
                // Events
                onDrag={handleDrag}
                onMouseDown={() => setDragging(true)}
                onMouseUp={() => setDragging(false)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        </Frame>
    )
}

// Set the component's default properties
Slider.defaultProps = {
    height: 50,
    width: 200,
    knobSize: 40,
    railHeight: 8,
    step: 0.01,
    value: 62,
    min: 0,
    max: 100,
    tint: "#027aff",
    accent: "#FFFFFF",
    validation: () => true,
    onValueChange: () => null,
}

// Set the component's property controls
addPropertyControls(Slider, {
    value: {
        type: ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 62,
        title: "Value",
    },
    min: {
        type: ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 0,
        title: "Min",
    },
    max: {
        type: ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 100,
        title: "Max",
    },
    step: {
        type: ControlType.Number,
        min: 0.01,
        max: 100,
        step: 0.01,
        defaultValue: 0.01,
        title: "Step",
    },
    knobSize: {
        type: ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 40,
        title: "Knob Size",
    },
    railHeight: {
        type: ControlType.Number,
        min: 0,
        max: 32,
        defaultValue: 8,
        title: "Rail Height",
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

// helpers

function toStep(number, increment, offset = 0) {
    return Math.floor((number - offset) / increment) * increment + offset
}
