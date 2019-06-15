import * as React from "react"
import {
    Frame,
    Color,
    addPropertyControls,
    ControlType,
    FrameProps,
} from "framer"
import { useInteractionState } from "./Hooks"
import { Text } from "./Text"
import { Icon } from "./Icon"
import { toColor } from "./Utils"
import { iconNames, iconTitles } from "./Shared"
import { colors } from "./canvas"

// Define a type for our props
type Props = Partial<FrameProps> & {
    text: string
    type: string
    icon: string
    clearable: boolean
    resize: boolean | "width" | "height"
    onResize: (width: number, height: number) => void
    onTap: () => void
    onClear: () => void
}

export function Chip(props: Partial<Props>) {
    const {
        clearable,
        text,
        icon,
        type,
        resize,
        style,
        onClear,
        onResize,
        onTap,
        ...rest
    } = props

    const { width, height } = props

    /* ---------------------------------- State --------------------------------- */

    const [interactionState, interactionProps] = useInteractionState({
        disabled: false,
        style: props.style,
    })

    // Set initial sizes
    const [state, setState] = React.useState({
        width: width as number,
        height: height as number,
    })

    // Reset sizes (to trigger Text's auto-size)
    React.useLayoutEffect(() => {
        setState({
            width: width as number,
            height: height as number,
        })
    }, [width, height])

    /* ----------------------------- Event Handlers ----------------------------- */

    // When Text resizes, resize this component, too
    const handleResize = (offsetWidth, offsetHeight) => {
        props.onResize(offsetWidth, offsetHeight)
        setState({
            ...state,
            width: offsetWidth,
            height: offsetHeight,
        })
    }

    // When the user taps the component
    const handleTap = (event: any, info: any) => {
        onTap()
    }

    // When the user taps the clear icon (x)
    const handleClear = () => {
        onClear()
    }

    /* ------------------------------ Presentation ------------------------------ */

    const fade = 0.16

    const theme = {
        primary: {
            foreground: colors.Primary,
            background: colors.Primary,
        },
        secondary: {
            foreground: colors.Secondary,
            background: colors.Secondary,
        },
        accent: {
            foreground: colors.Accent,
            background: colors.Accent,
        },
        neutral: {
            foreground: Color.alpha(Color(toColor(colors.Dark)), 0.7).toValue(),
            background: colors.Neutral,
        },
        ghost: {
            foreground: colors.Light,
            background: colors.Light,
        },
        warn: {
            foreground: colors.Warn,
            background: colors.Warn,
        },
    }

    return (
        <Frame
            {...rest} //
            {...interactionProps}
            {...state}
            background={Color.alpha(
                Color(toColor(theme[type].background)),
                fade
            )}
            borderRadius={8}
        >
            <Text
                resize
                text={text}
                type="caption"
                color={theme[type].foreground}
                paddingTop={8}
                paddingRight={clearable ? 32 : 12}
                paddingBottom={8}
                paddingLeft={12}
                onTap={handleTap}
                onResize={handleResize}
            />
            {clearable && (
                <Frame
                    height="100%"
                    x={state.width - 28}
                    width={24}
                    background="none"
                    onTap={handleClear}
                >
                    <Icon
                        icon={"close"}
                        center="x"
                        y={state.height / 2 - 5}
                        height={13}
                        width={13}
                        size={13}
                        color={theme[type].foreground}
                    />
                </Frame>
            )}
        </Frame>
    )
}

Chip.defaultProps = {
    height: 60,
    width: 200,
    text: "Item",
    type: "primary",
    clearable: false,
    resize: false,
    onTap: () => null,
    onClear: () => null,
    onResize: (width, height) => null,
}

addPropertyControls(Chip, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Item",
    },
    type: {
        title: "Type",
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
    clearable: {
        title: "Clearable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
