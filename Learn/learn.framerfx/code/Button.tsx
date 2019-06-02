import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Interactive } from "./Interactive"
import { Icon } from "./Icon"
import { Text } from "./Text"
import { iconNames, iconTitles } from "./Utils"
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
    icon: string
    onTap: (event, info, toggled: boolean | null) => void
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
        type,
        text,
        icon,
        onTap,
        disabled,
        toggle,
        toggled: initialToggled,
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
    const handleTap = (event, info) => {
        const next = !state.toggled

        // Call onTap with the toggled state
        onTap(event, info, next)

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

    const theme = {
        primary: {
            foreground: colors.Light,
            background: colors.Primary,
        },
        secondary: {
            foreground: colors.Light,
            background: colors.Secondary,
        },
        accent: {
            foreground: colors.Light,
            background: colors.Accent,
        },
        neutral: {
            foreground: colors.Dark,
            background: colors.Neutral,
        },
        warn: {
            foreground: colors.Light,
            background: colors.Warn,
        },
        ghost: {
            foreground: colors.Primary,
            background: "none",
        },
    }

    const variants = {
        initial: {
            style: {
                filter: `brightness(1)`,
            },
            border: `0px solid ${colors.Shadow}`,
        },
        hovered: {
            style: {
                filter: `brightness(1.055)`,
            },
            border: `1px solid ${colors.Shadow}`,
        },
        pressed: {
            style: {
                filter: `brightness(.8)`,
            },
            border: `1px solid ${colors.Shadow}`,
        },
        active: {
            style: {
                filter: `brightness(.95)`,
            },
            border: `1px solid ${colors.Active}`,
        },
    }

    return (
        // Pass in container props when using this component in code
        <Interactive
            {...props as any}
            // Events
            onTap={!disabled && handleTap}
            pressed={toggled}
        >
            {current => {
                const variant =
                    type === "ghost"
                        ? { border: `1px solid ${colors.Primary}` }
                        : variants[current]

                const content =
                    icon === "none" ? (
                        <Text
                            // Constant props
                            text={text}
                            type="link"
                            height="100%"
                            width="100%"
                            color={theme[type].foreground}
                        />
                    ) : (
                        <Icon
                            center
                            icon={icon}
                            color={theme[type].foreground}
                        />
                    )

                return (
                    <Frame
                        size="100%"
                        borderRadius={8}
                        background={theme[type].background}
                        {...variant}
                    >
                        {content}
                    </Frame>
                )
            }}
        </Interactive>
    )
}

// Set the component's default properties
Button.defaultProps = {
    height: 60,
    width: 320,
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
    type: {
        type: ControlType.Enum,
        options: ["primary", "secondary", "accent", "warn", "neutral", "ghost"],
        optionTitles: [
            "Primary",
            "Secondary",
            "Accent",
            "Warn",
            "Neutral",
            "Ghost",
        ],
        defaultValue: "primary",
    },
    icon: {
        title: "Icon",
        type: ControlType.Enum,
        options: ["none", ...iconNames],
        optionTitles: ["None", ...iconTitles],
        defaultValue: "none",
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
})
