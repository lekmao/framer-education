import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Interactive } from "./Interactive"
import {
    colors,
    Buttons_Primary,
    Buttons_Ghost,
    Buttons_Secondary,
    Buttons_Warn,
} from "./Canvas"
import { iconNames, iconTitles } from "./Utils"
import { Icon } from "./Icon"

const Colors = {
    primary: colors.Light,
    secondary: colors.Dark,
    ghost: colors.Primary,
    warn: colors.Warn,
}

const Components = {
    primary: Buttons_Primary,
    secondary: Buttons_Secondary,
    ghost: Buttons_Ghost,
    warn: Buttons_Warn,
}

// Define a type for our props
type Props = {
    height: number | string
    width: number | string
    text: string
    disabled: boolean
    toggle: boolean
    toggled: boolean
    type: string
    color: string
    icon: string
    onTap: (toggled: boolean | null) => void
}

/**
 * Button
 * @param props
 */
export function Button(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming toggled to avoid conflicting with the state's toggled
    // property
    const {
        height,
        width,
        disabled,
        toggle,
        toggled: initialToggled,
        onTap,
        text,
        type,
        icon,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Initialize state with props values
    const [state, setState] = React.useState({
        toggled: toggle ? initialToggled : null,
    })

    // When the hook receives new props, overwrite the state
    React.useEffect(() => {
        setState({
            ...state,
            toggled: toggle ? initialToggled : null,
        })
    }, [initialToggled])

    /* ----------------------------- Event Handlers ----------------------------- */

    // When the user taps on the button, run onTap and update toggled
    const handleTap = () => {
        if (disabled) return

        const next = !state.toggled

        // Call onTap with the toggled state
        onTap(next)

        // If this button should toggle, flip the toggle state
        if (toggle) {
            setState({
                ...state,
                toggled: next,
            })
        }
    }

    /* ------------------------------ Presentation ------------------------------ */

    // Grab the properties we want to use from state
    const { toggled } = state

    const Component = Components[type]

    return (
        // Pass in container props when using this component in code
        <Interactive
            disabled={disabled}
            pressed={toggled}
            height={height}
            width={width}
            // {...props as any}
        >
            <Component
                // Constant props
                size="100%"
                // Events
                onClick={handleTap}
                text={icon === "none" ? text : ""}
            />
            {icon !== "none" && (
                <Icon center icon={icon} color={Colors[type]} />
            )}
        </Interactive>
    )
}

// Set the component's default properties
Button.defaultProps = {
    height: 60,
    width: 200,
    disabled: false,
    text: "Get Started!",
    icon: "none",
    type: "primary",
    primary: true,
    onTap: () => null,
}

// Set the component's property controls
addPropertyControls(Button, {
    text: {
        type: ControlType.String,
        title: "Text",
        defaultValue: "Get Started!",
    },
    toggle: {
        type: ControlType.Boolean,
        title: "Toggle",
        defaultValue: false,
    },
    toggled: {
        type: ControlType.Boolean,
        title: "Toggled",
        defaultValue: false,
        hidden: ({ toggle }) => !toggle,
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
    icon: {
        title: "Icon",
        type: ControlType.Enum,
        options: ["none", ...iconNames],
        optionTitles: ["None", ...iconTitles],
        defaultValue: "none",
    },
})
