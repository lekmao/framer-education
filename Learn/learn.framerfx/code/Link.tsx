import * as React from "react"
import { addPropertyControls, ControlType, FrameProps } from "framer"
import { Interactive } from "./Interactive"
import { Text } from "./Text"
import { Icon } from "./Icon"
import { iconNames, iconTitles } from "./Shared"
import { colors } from "./canvas"

// Define a type for our props
type Props = Partial<FrameProps> & {
    text: string
    type: string
    icon: string
    disabled: boolean
    resize: boolean
    onResize: (width: number, height: number) => void
    onTap: (event: any, info: any) => void
}

export function Link(props: Partial<Props>) {
    // Grab the properties we want to use from props
    const { onTap, text, icon, type, resize, ...rest } = props
    const { height, width, disabled } = props

    const [state, setState] = React.useState({
        width,
    })

    React.useEffect(() => {
        setState({ width })
    }, [width])

    /* ----------------------------- Event Handlers ----------------------------- */

    // When the user taps on the button, run onTap
    const handleTap = (event: any, info: any) => {
        // Call onTap with the toggled state
        onTap(event, info)
    }

    const handleResize = (width: number, height: number) => {
        if (resize) {
            setState({ ...state, width })
            props.onResize(width, height)
        }
    }

    /* ------------------------------ Presentation ------------------------------ */

    const theme = {
        primary: {
            foreground: colors.Primary,
        },
        secondary: {
            foreground: colors.Secondary,
        },
        accent: {
            foreground: colors.Accent,
        },
        neutral: {
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
            {...rest}
            {...state}
            // Events
            onTap={!disabled && handleTap}
        >
            {current => {
                const content =
                    icon === "none" ? (
                        <Text
                            // Constant props
                            height={height}
                            width="100%"
                            type="link"
                            color={theme[type].foreground}
                            resize={resize}
                            onResize={handleResize}
                            text={text}
                        />
                    ) : (
                        <Icon
                            center
                            icon={icon}
                            color={theme[type].foreground}
                        />
                    )

                return content
            }}
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
    icon: "none",
    resize: false,
    background: "none",
    onResize: (width, height) => null,
}

// Set the component's property controls
addPropertyControls(Link, {
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
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: false,
    },
})
