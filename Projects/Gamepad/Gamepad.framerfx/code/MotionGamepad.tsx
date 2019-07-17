import { motionValue, MotionValue } from "framer"

export class MotionGamepad {
    index = 0
    looping = false
    gamepad: Gamepad
    layout = "dualshock"
    deadZone = 0.1
    axisThreshold = 0.03
    stickSpeed = 10
    onConnect: (gamepad: Gamepad) => void
    onDisconnect: (gamepad: Gamepad) => void
    onButtonDown: (button: string, pressed: boolean, value: number) => void
    onButtonChange: (button: string, pressed: boolean, value: number) => void
    onButtonUp: (button: string, pressed: boolean, value: number) => void
    onAxisChange: (axis: string, value: number, delta: number) => void

    state: {
        buttons: {
            [key: string]: MotionValue<boolean>
        }
        axes: {
            [key: string]: MotionValue<number>
        }
        sticks: {
            [key: string]: {
                x: MotionValue<number>
                y: MotionValue<number>
                point: {
                    x: MotionValue<number>
                    y: MotionValue<number>
                }
                speed?: number
                bounds?: {
                    top: number
                    right: number
                    bottom: number
                    left: number
                }
            }
        }
    }

    constructor(index = 0, options: Partial<Options> = {}) {
        const {
            layout = "dualshock",
            deadZone = 0.1,
            axisThreshold = 0.03,
            stickSpeed = 10,
            onButtonDown,
            onButtonUp,
            onButtonChange,
            onAxisChange,
            onConnect = () => console.log("connected"),
            onDisconnect = () => console.log("disconnected "),
        } = options

        // Input Motion Values

        this.index = index

        this.deadZone = deadZone
        this.axisThreshold = axisThreshold
        this.stickSpeed = stickSpeed
        this.onButtonUp = onButtonUp
        this.onButtonDown = onButtonDown
        this.onButtonChange = onButtonChange
        this.onAxisChange = onAxisChange
        this.onConnect = onConnect
        this.onDisconnect = onDisconnect

        this.state = {
            buttons: layouts[layout].buttons.reduce((acc, cur) => {
                acc[cur] = motionValue(false)
                return acc
            }, {}),
            axes: layouts[layout].axes.reduce((acc, cur) => {
                acc[cur] = motionValue(0)
                return acc
            }, {}),
            sticks: layouts[layout].sticks.reduce((acc, cur) => {
                acc[cur] = {
                    point: {
                        x: motionValue(0),
                        y: motionValue(0),
                    },
                    speed: options.sticks[cur] && options.sticks[cur].speed,
                    bounds: options.sticks[cur] && options.sticks[cur].bounds,
                }
                return acc
            }, {}),
        }

        window.addEventListener("gamepadconnected", this.addGamepad, false)
        window.addEventListener(
            "gamepaddisconnected",
            this.removeGamepad,
            false
        )
    }

    // Gamepads

    addGamepad = (event: GamepadEvent) => {
        const { gamepad: pad } = event

        if (pad.index === this.index) {
            this.gamepad = event.gamepad
            this.onConnect && this.onConnect(pad)

            // Start the update loop
            requestAnimationFrame(this.updateGamepad)
        }
    }

    removeGamepad = (event: GamepadEvent) => {
        const { gamepad: pad } = event

        if (pad.index === this.index) {
            this.gamepad = undefined
            this.onDisconnect && this.onDisconnect(pad)

            // Stop the update loop
            this.looping = false
        }
    }

    // Update gamepad on each frame

    updateGamepad = () => {
        const {
            gamepad,
            state,
            looping,
            layout,
            deadZone,
            stickSpeed,
            axisThreshold,
            onButtonDown,
            onButtonUp,
            onButtonChange,
            onAxisChange,
        } = this

        // If we've stopped looping (because a gamepad was
        // disconnected), we break the loop.
        if (!looping) {
            return
        }

        // If we're still looping but don't have a gamepad,
        // something terrible happened and we need to
        // break the loop.
        if (!gamepad) {
            return
        }

        // Update our gamepad's buttons
        for (let i = 0; i < gamepad.buttons.length; ++i) {
            const { pressed, value } = gamepad.buttons[i]
            const button = layouts[layout].buttons[i]

            if (pressed) {
                // If pressed and not pressed in state, set value and fire down events
                if (!state.buttons[button].get()) {
                    onButtonDown && onButtonDown(button, pressed, value)
                    onButtonChange && onButtonChange(button, pressed, value)
                    state.buttons[button].set(true)
                }
            } else {
                // If pressed in state and now released, set value and fire up events
                if (state.buttons[button].get()) {
                    onButtonUp && onButtonUp(button, pressed, value)
                    onButtonChange && onButtonChange(button, pressed, value)
                    state.buttons[button].set(false)
                }
            }
        }

        // Update our gamepad's axes / sticks
        for (let i = 0; i < gamepad.axes.length; ++i) {
            // The name of this axis (from our layout)
            const axis = layouts[layout].axes[i]

            // Last value (from state)
            const previous = state.axes[axis].get()

            // Current value (from gamepad)
            const value = gamepad.axes[i]

            // Difference between the two
            const delta = value - previous

            // If the axis' value is below the dead zone, set it to
            // zero (if it's not zero already).
            if (Math.abs(value) < deadZone) {
                if (previous !== 0) {
                    state.axes[axis].set(0)

                    onAxisChange && onAxisChange(axis, 0, delta)
                }
            } else {
                // If the delta between the previous and current values
                // is above the axis threshold, update the axis value.
                if (Math.abs(delta) > axisThreshold) {
                    state.axes[axis].set(value)
                    onAxisChange && onAxisChange(axis, value, delta)
                }

                // Get the stick for this axis
                const stick = state.sticks[Math.floor(i / 2)]

                // If a stick exists...
                if (stick) {
                    // Sticks have two axes, x and y.

                    if (i % 2 === 0) {
                        // Update the x value
                        stick.x.set(value)

                        // Get the next point's x value
                        const x =
                            stick.point.x.get() +
                            value * (stick.speed || stickSpeed)

                        if (stick.bounds) {
                            // If the stick has bounds, clamping the point's x
                            // value to stay within the stick's bounds.
                            stick.point.x.set(
                                clamp(x, stick.bounds.left, stick.bounds.right)
                            )
                        } else {
                            // Otherwise, just set the point's x value
                            stick.point.x.set(x)
                        }
                    } else {
                        // Repeat for y value
                        stick.y.set(value)
                        const y =
                            stick.point.y.get() +
                            value * (stick.speed || stickSpeed)

                        if (stick.bounds) {
                            stick.point.y.set(
                                clamp(y, stick.bounds.top, stick.bounds.bottom)
                            )
                        } else {
                            stick.point.y.set(y)
                        }
                    }
                }
            }
        }

        // Now update the current value of the inputs ref,
        // so that we can access those values on the next update
        this.state = state

        // And trigger the next update
        requestAnimationFrame(this.updateGamepad)
    }

    remove = () => {
        window.removeEventListener("gamepadconnected", this.addGamepad)
        window.removeEventListener("gamepaddisconnected", this.removeGamepad)
    }

    get inputs() {
        return this.state
    }
}

type Options = {
    layout: string
    deadZone: number
    stickSpeed: number
    axisThreshold: number
    buttons: {
        square: MotionValue<boolean>
        x: MotionValue<boolean>
        circle: MotionValue<boolean>
        triangle: MotionValue<boolean>
        leftTrigger1: MotionValue<boolean>
        rightTrigger1: MotionValue<boolean>
        leftTrigger2: MotionValue<boolean>
        rightTrigger2: MotionValue<boolean>
        share: MotionValue<boolean>
        options: MotionValue<boolean>
        leftStick: MotionValue<boolean>
        rightStick: MotionValue<boolean>
        playstation: MotionValue<boolean>
        touchPad: MotionValue<boolean>
        dPadUp: MotionValue<boolean>
        dPadDown: MotionValue<boolean>
        dPadLeft: MotionValue<boolean>
        dPadRight: MotionValue<boolean>
    }
    axes: {
        leftStickX: MotionValue<number>
        leftStickY: MotionValue<number>
        rightStickX: MotionValue<number>
        rightStickY: MotionValue<number>
        leftTrigger: MotionValue<number>
        rightTrigger: MotionValue<number>
    }
    sticks: {
        left: {
            x: MotionValue<number>
            y: MotionValue<number>
            point: {
                x: MotionValue<number>
                y: MotionValue<number>
            }
            speed: 10
            bounds: {
                top: number
                left: number
                right: number
                bottom: number
            }
        }
        right: {
            x: MotionValue<number>
            y: MotionValue<number>
            point: {
                x: MotionValue<number>
                y: MotionValue<number>
            }
            speed: 10
            bounds: {
                top: number
                left: number
                right: number
                bottom: number
            }
        }
    }
    onConnect: (gamepad: Gamepad) => void
    onDisconnect: (gamepad: Gamepad) => void
    onButtonDown: (button: string, pressed: boolean, value: number) => void
    onButtonChange: (button: string, pressed: boolean, value: number) => void
    onButtonUp: (button: string, pressed: boolean, value: number) => void
    onAxisChange: (axis: string, value: number, delta: number) => void
}

const layouts = {
    dualshock: {
        buttons: [
            "square",
            "x",
            "circle",
            "triangle",
            "leftTrigger1",
            "rightTrigger1",
            "leftTrigger2",
            "rightTrigger2",
            "share",
            "options",
            "leftStick",
            "rightStick",
            "playstation",
            "touchPad",
            "dPadUp",
            "dPadDown",
            "dPadLeft",
            "dPadRight",
        ],
        axes: [
            "leftStickX",
            "leftStickY",
            "rightStickX",
            "rightStickY",
            "leftTrigger",
            "rightTrigger",
        ],
        sticks: ["left", "right"],
    },
}

export function clamp(value: number, min: number, max: number) {
    return Math.max(Math.min(value, Math.max(min, max)), Math.min(min, max))
}
