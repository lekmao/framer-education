import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"
import { Interactive } from "./Interactive"
import { colors, Links_Primary, Links_Secondary, Links_Warn } from "./canvas"

const Components = {
    primary: Links_Primary,
    secondary: Links_Secondary,
    warn: Links_Warn,
}

// Define a type for our props
type Props = {
    height: number
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
    const { height, disabled, onTap, text, type } = props

    /* ----------------------------- Event Handlers ----------------------------- */

    // When the user taps on the button, run onTap and update toggled
    const handleTap = () => {
        if (disabled) return

        // Call onTap with the toggled state
        onTap()
    }

    /* ------------------------------ Presentation ------------------------------ */

    const Component = Components[type]

    return (
        // Pass in container props when using this component in code
        <Interactive disabled={disabled} {...props as any}>
            <Component
                // Constant props
                size="100%"
                text={text}
            />
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
        options: ["primary", "secondary", "warn"],
        optionTitles: ["Primary", "Secondary", "Warn"],
        defaultValue: "primary",
    },
})
