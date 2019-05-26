import * as React from "react"
import {
    Frame,
    Color,
    addPropertyControls,
    ControlType,
    useMotionValue,
    useTransform,
} from "framer"
import {
    colors,
    Slider_Fill,
    Slider_Knob,
    Slider_Rail,
    Slider_Warn,
    Slider_KnobWarn,
} from "./canvas"
import { Interactive } from "./Interactive"

type Props = {
    width: number
    min: number
    max: number
    value: number
    disabled: boolean
    step: number
    onDrag: any
    onDragStart: any
    onDragEnd: any
    validation: (value: number, progress: number) => boolean
    onValueChange: (value: number, progress: number, valid: boolean) => void
}

const knobSize = 40,
    railHeight = 8

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
        validation,
        onValueChange,
    } = props

    /* ---------------------------------- State --------------------------------- */

    const railWidth = width - knobSize

    function toStep(number) {
        return Math.round(number / step) * step
    }

    function toProgress(value: number) {
        return (value - min) / (max - min)
    }

    const dragX = useMotionValue(toProgress(toStep(initialValue)) * railWidth)

    const knobX = useTransform(dragX, v =>
        toProgress(toStep(min + (v / railWidth) * (max - min)) * railWidth)
    )

    const valid = useTransform(knobX, v =>
        validation(v, toStep(min + (v / railWidth) * (max - min)))
    )
    const warnOpacity = useTransform(valid, v => (v ? 0 : 1))

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        dragX.set(toProgress(toStep(initialValue)) * railWidth)
    }, [initialValue, min, max, validation])

    /* ----------------------------- Event Handlers ----------------------------- */

    knobX.onChange(v => {
        const value = toStep(min + (v / railWidth) * (max - min))
        if (!disabled) {
            onValueChange(value, toProgress(value), valid.get())
        }
    })

    /* ------------------------------ Presentation ------------------------------ */

    // Get the properties we want from state
    const { onDragStart, onDragEnd, onDrag } = props

    return (
        <Interactive
            // Constants
            center
            height={40}
            disabled={disabled}
            width={width}
            active={false}
            background="none"
        >
            <Slider_Rail center="y" width={railWidth} left={knobSize / 2} />
            <Slider_Warn
                center="y"
                width={railWidth}
                left={knobSize / 2}
                opacity={warnOpacity}
            />
            <Slider_Fill center="y" width={knobX} left={knobSize / 2} />
            <Frame size={40} x={knobX} center="y" background="none">
                <Slider_Knob center />
                <Slider_KnobWarn center opacity={warnOpacity} />
            </Frame>
            <Frame
                size={40}
                center="y"
                background="none"
                x={dragX}
                drag={disabled ? false : "x"}
                dragMomentum={false}
                dragElastic={false}
                dragConstraints={{
                    left: 0,
                    right: width - knobSize,
                }}
                onDrag={onDrag}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            />
        </Interactive>
    )
}

// Set the component's default properties
Slider.defaultProps = {
    height: 40,
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
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
})

// helpers
