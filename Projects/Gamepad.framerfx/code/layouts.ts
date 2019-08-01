import { GamepadLayouts } from "./types"

export const layouts: GamepadLayouts = {
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
