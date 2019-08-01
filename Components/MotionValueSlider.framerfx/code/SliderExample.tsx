import * as React from "react"
import {
    Frame,
    motionValue,
    transform,
    useTransform,
    MotionValue,
    useMotionValue,
    addPropertyControls,
    ControlType,
} from "framer"

// @steveruizok

export function SliderExample(props) {
    let { value, knobSize, onValueChange, ...rest } = props

    // [1]
    const isMotionValue = value instanceof MotionValue

    // [2]
    const sizeRef = React.useRef<HTMLDivElement>()

    // [3]
    const knobX = useMotionValue(isMotionValue ? value.get() : value)

    // [4]
    const updateKnobX = newValue => {
        const width = Math.floor(sizeRef.current.offsetWidth)
        const val = transform(newValue, [0, 1], [0, width - knobSize])
        knobX.set(val)
    }

    // [5]
    const updateValue = newKnobX => {
        const width = Math.floor(sizeRef.current.offsetWidth)
        const val = transform(newKnobX, [0, width - knobSize], [0, 1])

        if (isMotionValue) {
            value.set(val)
        }

        onValueChange && onValueChange(val)
    }

    // [6]
    React.useLayoutEffect(() => {
        updateKnobX(isMotionValue ? value.get() : value)
    }, [props.size, props.width, value])

    // [7]
    React.useEffect(() => {
        if (isMotionValue) {
            return value.onChange(updateKnobX)
        }
    }, [])

    // [8]
    React.useEffect(() => {
        return knobX.onChange(updateValue)
    }, [])

    return (
        <Frame
            {...rest}
            ref={sizeRef} // [9]
            height={4}
            width={"100%"}
            backgroundColor="#dedede"
            center
        >
            <Frame
                height={4}
                width={knobX} // [10]
                backgroundColor="#0099ff"
                center="y"
            />
            <Frame
                borderRadius="100%"
                size={knobSize}
                x={knobX} // [11]
                center="y"
                drag="x"
                dragElastic={0}
                dragConstraints={sizeRef} // [12]
                dragMomentum={false}
                backgroundColor="#FFFFFF"
                shadow="0px 2px 5px rgba(0,0,0,.16)"
            />
        </Frame>
    )
}

SliderExample.defaultProps = {
    value: 0.5,
    knobSize: 32,
    onValueChange: (value: number) => null,
}

addPropertyControls(SliderExample, {
    value: {
        type: ControlType.Number,
        min: 0,
        max: 1,
        step: 0.001,
        defaultValue: 0.5,
    },
    knobSize: {
        type: ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 32,
    },
})

/*
Notes _____________

[1]
First off, we need to know whether the `props.value` is a motion value or not.

[2]
We'll need to know exactly how wide the component actually is, even if `props.width` is percentage or fraction. So we'll use a ref and pass this to our component's root Frame below.

[3]
Let's also create a new motion value for our slider's knob.

[4]
Here's how we'll update our knobX value. The function takes a new value in (something between 0 and 1), and then, using the actual width of our component from the ref, it transforms that number into the x position for the knob. Finally, it sets that new value on the `knobX` motion value.

[5]
We'll also need to translate in the other direction - turning the knob's x position into a value between 0 and 1.
If our value is a motion value, then we'll set that value on the `value` motion value. Either way, we'll share it by running the `onValueChange` callback, if we have one.

[6]
When our component first mounts - or if its `props.width`, `props.size`, or `value` ever change, we want to update the position of our knob. If `props.value` is a motion value, then we'll need to get its value first so that we can pass in an actual number; otherwise, we'll just pass in `props.value`. We're using a LayoutEffect so that this happens before the component "paints" onto the canvas, to avoid any flashing changes.

[7]
When our component first mounts - but only when it first mounts - we'll check whether `props.value` is a motion value. If it is, we'll set an `onChange` listener that will run `updateKnobX` any time that motion value changes. The `onChange` function returns a new function to stop the listener; and, because we want this listener to remove itself when our slider component unmounts, it's important that we return that function in our effect hook.

[8]
Same again for the `knobX` motion value -- whenever it changes, we want to run the `updateValue` function.

[9]
We need to pass the ref to the Frame, so that we're able to get information about its width in our functions.

[10]
For our slider's fill, we can use `knobX` for its width.

[11]
And we want to pass the `knobX` motion value to the knob's `x` prop, so that we can get updates when this prop changes as we drag the knob around.

[11]
We can also use our container's ref to set the drag constraints of our slider's knob!
*/
