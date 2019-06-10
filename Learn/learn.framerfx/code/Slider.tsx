import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    useMotionValue,
    useTransform,
    FrameProps,
} from "framer"
import { useInteractionState } from "./Hooks"
import { Text } from "./Text"
import { colors } from "./canvas"

let i = 0

type Props = Partial<FrameProps> & {
    width: number
    min: number
    max: number
    value: number
    disabled: boolean
    step: number
    titles: boolean
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
        step,
        titles,
        validation,
        onValueChange,
        onDragStart,
        onDragEnd,
        onDrag,
        drag,
        disabled,
        style,
        ...rest
    } = props

    const railWidth = props.width - knobSize

    // Get number of decimal places to add to the title
    let places
    let stepString = JSON.stringify(step)
    places = stepString.includes(".")
        ? Math.min(stepString.split(".")[1].length, 3)
        : 0

    /* ------------------------------ Motion Values ----------------------------- */

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

    /* ---------------------------------- State --------------------------------- */

    const initialValid = React.useRef(
        validation(initialValue, toProgress(initialValue))
    )

    const isValid = React.useRef(initialValid.current)
    const prevValue = React.useRef(initialValue)

    const [state, setState] = React.useState({
        valid: initialValid.current,
        valueTitle: prevValue.current.toFixed(places),
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        dragX.set(toProgress(toStep(initialValue)) * railWidth)
    }, [initialValue, min, max, validation])

    /* ----------------------------- Event Handlers ----------------------------- */

    knobX.onChange(v => {
        const value = toStep(min + (v / railWidth) * (max - min))
        const progress = toProgress(value)
        const valid = validation(value, progress)

        // Motion Values change a lot, so we really really don't
        // want to update state unless we absolutely have to

        let validChange, valueChange

        // Check if valid has changed
        if (valid !== isValid.current) {
            isValid.current = valid
            validChange = true
        }

        // If titles are on, check if value has changed
        if (value !== prevValue.current) {
            prevValue.current = value
            valueChange = true

            // Call onValueChanged, too
            if (!props.disabled) {
                onValueChange(value, progress, valid)
            }
        }

        // Update state if valid has changed, or if titles are on and value has changed
        if (validChange || (titles && valueChange)) {
            setState({
                valid: isValid.current,
                valueTitle: prevValue.current.toFixed(places),
            })
        }
    })

    /* ------------------------------ Presentation ------------------------------ */

    const variants = {
        initial: {
            border: `1px solid ${colors.Neutral}`,
        },
        hovered: {
            border: `1px solid ${colors.Border}`,
        },
        active: {
            border: `1px solid ${colors.Active}`,
        },
        warn: {
            border: `1px solid ${colors.Warn}`,
        },
    }

    const [interactionState, interactionProps] = useInteractionState({
        disabled,
        style,
    })

    return (
        <Frame
            // Constants
            {...rest}
            {...interactionProps}
            height={40}
            background="none"
        >
            <Frame
                height={8}
                borderRadius={4}
                center="y"
                width={railWidth}
                left={knobSize / 2}
                background={colors.Neutral}
                border={`${state.valid ? 0 : 1}px solid ${colors.Warn}`}
            />
            <Frame
                height={8}
                borderRadius={4}
                background={colors.Primary}
                center="y"
                width={knobX}
                left={knobSize / 2}
            />
            {titles && (
                <>
                    <Text
                        text={min.toString()}
                        width={knobSize}
                        y={16}
                        height="100%"
                        type={"caption"}
                        textAlign="center"
                        verticalAlign="bottom"
                    />
                    <Text
                        text={max.toString()}
                        width={knobSize}
                        y={16}
                        x={railWidth}
                        height="100%"
                        type={"caption"}
                        textAlign="center"
                        verticalAlign="bottom"
                    />
                </>
            )}
            <Frame size={40} x={knobX} center="y" background="none">
                <Frame
                    background={colors.Light}
                    height={36}
                    width={36}
                    borderRadius="100%"
                    shadow={`0px 2px 5px ${colors.Shadow}`}
                    center
                    {...variants[state.valid ? interactionState : "warn"]}
                />
                {titles && (
                    <Text
                        text={state.valueTitle}
                        y={-16}
                        center="x"
                        type={"caption"}
                        height={12}
                        textAlign="center"
                        verticalAlign="bottom"
                    />
                )}
            </Frame>
            <Frame
                size={40}
                center="y"
                background="none"
                x={dragX}
                drag={props.disabled ? false : "x"}
                dragMomentum={false}
                dragElastic={false}
                dragConstraints={{
                    left: 0,
                    right: props.width - knobSize,
                }}
                onDrag={onDrag}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            />
        </Frame>
    )
}

// Set the component's default properties
Slider.defaultProps = {
    center: true,
    height: 40,
    width: 320,
    step: 0.01,
    value: 62,
    min: 0,
    max: 100,
    titles: false,
    validation: v => true,
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
        min: 0.001,
        max: 100,
        step: 0.001,
        defaultValue: 0.01,
        displayStepper: true,
        title: "Step",
    },
    titles: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Titles",
    },
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
})

// helpers
