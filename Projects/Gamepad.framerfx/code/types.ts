import { MotionValue } from "framer"
import { layouts } from "./layouts"

export type MotionGamepadOptions = {
    index: number
    id?: string
    layout: string
    deadZone: number
    axisThreshold: number
    stickSpeed: number
    sticks?: {
        [key: string]: MotionGamepadStick
    }
    onConnect: MotionGamepadConnectEvent
    onDisconnect: MotionGamepadConnectEvent
    onButtonDown: MotionGamepadButtonEvent
    onButtonChange: MotionGamepadButtonEvent
    onButtonUp: MotionGamepadButtonEvent
    onAxisChange: MotionGamepadAxisEvent
}
export type MotionGamepadStick = {
    speed?: number
    bounds?: {
        top: number
        left: number
        right: number
        bottom: number
    }
}
export type MotionGamepadConnectEvent = (gamepad: Gamepad) => void
export type MotionGamepadButtonEvent = (
    button: string,
    pressed: boolean,
    value: number
) => void
export type MotionGamepadAxisEvent = (
    axis: string,
    value: number,
    delta: number
) => void

export type MotionGamepadState = {
    buttons: {
        [key: string]: MotionValue<boolean>
    }
    axes: {
        [key: string]: MotionValue<number>
    }
    sticks: Partial<{
        [key: string]: {
            x: MotionValue<number>
            y: MotionValue<number>
            point: {
                x: MotionValue<number>
                y: MotionValue<number>
            }
            speed: number
            bounds: {
                top: number
                right: number
                bottom: number
                left: number
            }
        }
    }>
}

export type GamepadLayout = {
    buttons: string[]
    axes: string[]
    sticks: string[]
}

export type GamepadLayouts = { [key: string]: GamepadLayout }
