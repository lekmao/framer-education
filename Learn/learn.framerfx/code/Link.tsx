import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"
import { Interactive } from "./Interactive"
import { Text } from "./Text"
import { colors } from "./canvas"

// Define a type for our props
type Props = {
    height: any
    width: any
    text: string
    disabled: boolean
    toggle: boolean
    toggled: boolean
    type: string
    color: string
    onTap: () => void
}

/**
 * Button
 * @param props
 */
export function Link(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming toggled to avoid conflicting with the state's toggled
    // property
    const { height, width, disabled, onTap, text, type } = props

    /* ----------------------------- Event Handlers ----------------------------- */

    // When the user taps on the button, run onTap and update toggled
    const handleTap = () => {
        if (disabled) return

        // Call onTap with the toggled state
        onTap()
    }

    /* ------------------------------ Presentation ------------------------------ */

    const theme = {
        primary: {
            foreground: colors.Primary,
        },
        secondary: {
            foreground: colors.Dark,
        },
        ghost: {
            foreground: colors.Light,
        },
        warn: {
            foreground: colors.Warn,
        },
    }

    return (
        // Pass in container props when using this component in code
        <Interactive
            {...props as any}
            // Events
            onTap={handleTap}
        >
            <Text
                // Constant props
                size="100%"
                type="link"
                color={theme[type].foreground}
            >
                {text}
            </Text>
        </Interactive>
    )
}

// Set the component's default properties
Link.defaultProps = {
    height: 60,
    width: 200,
    disabled: false,
    text: "Get Started!",
    type: "primary",
    color: "red",
    primary: true,
    onTap: () => null,
}

// Set the component's property controls
addPropertyControls(Link, {
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: "Get Started!",
    },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: false,
    },
    type: {
        type: ControlType.Enum,
        options: ["primary", "secondary", "ghost", "warn"],
        optionTitles: ["Primary", "Secondary", "Ghost", "Warn"],
        defaultValue: "primary",
    },
})
