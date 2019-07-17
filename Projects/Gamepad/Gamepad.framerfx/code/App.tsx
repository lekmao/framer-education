import * as React from "react"
import {
    Override,
    motionValue,
    useMotionValue,
    useTransform,
    Data,
    Frame,
} from "framer"
import { MotionGamepad } from "./MotionGamepad"

// [1]
const appState = Data({
    dots: [] as { x: number; y: number; color: string }[],
})

// [2]
const gamepad = new MotionGamepad(0, {
    sticks: {
        left: {
            // [6]
            speed: 10,
            bounds: {
                top: -260,
                left: -140,
                right: 140,
                bottom: 260,
            },
        },
        right: {
            speed: 10,
            bounds: {
                top: -260,
                left: -140,
                right: 140,
                bottom: 260,
            },
        },
    },
    onButtonDown: button => {
        if (button === "x") {
            // gamepad.sticks returns the current values
            const { x, y } = gamepad.sticks.left.point
            appState.dots = [...appState.dots, { x, y, color: "#00bbff" }]
        } else if (button === "circle") {
            const { x, y } = gamepad.sticks.right.point
            appState.dots = [...appState.dots, { x, y, color: "#ba66cd" }]
        }
    },
})

const { inputs } = gamepad

// [8]
export function LeftStickCursor(): Override {
    return {
        ...inputs.sticks.left.point,
    }
}

export function RightStickCursor(): Override {
    return {
        ...inputs.sticks.right.point,
    }
}

// [9]
export function LeftStick(): Override {
    const x = useTransform(inputs.sticks.left.x, v => v * 10)
    const y = useTransform(inputs.sticks.left.y, v => v * 10)
    const scale = useTransform(inputs.buttons.leftStick, v => (v ? 0.9 : 1))

    return {
        x,
        y,
        scale,
    }
}

export function RightStick(): Override {
    const x = useTransform(inputs.sticks.right.x, v => v * 10)
    const y = useTransform(inputs.sticks.right.y, v => v * 10)
    const scale = useTransform(inputs.buttons.rightStick, v => (v ? 0.9 : 1))

    return {
        x,
        y,
        scale,
    }
}

// [10]
export function DotsContainer(): Override {
    return {
        children: appState.dots.map((dot, index) => (
            <Frame
                key={index}
                size={16}
                center
                x={dot.x}
                y={dot.y - 4}
                background={dot.color}
                borderRadius="100%"
            />
        )),
    }
}

/*
Notes _____________

@steveruizok

[1]
Keep track of our dots (created with "x" and "o" buttons)

[2]
Get an object full of motion values for the controller's inputs. See "./Hooks" for those values.

[3]
Override for our GamePad instance. For now, this needs to be connected to a "visible" GamePad instance in the Preview in order to mount.

[4]
We first give the component all of the input motion values.

[5]
Then define some bounds for our left and right stick points (used for the cursors).

[6]
These are multipliers for the stick deltas. Higher numbers will move the cursors faster.

[7]
We can also set listeners to button presses (and axis changes). Here we're using the "x" and "o" button presses to create new dots, by pushing an object to the appState.dots array. (We're also pulling the current x and y values from the sticks' current points.)

[8]
Here we're creating the relationship between the thumbsticks' axis values and the position of the thumbstick layers.

[8]
Here we're creating the relationship between the thumbsticks' points and the position of the cursors.

[9]
Here we're creating the relationship between the thumbsticks' axis values and the position of the thumbstick layers.

[10]
And finally, we're mapping over the appState.dots array to creating our dots
*/
