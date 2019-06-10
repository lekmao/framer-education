import * as React from "react"
import { Frame, addPropertyControls, ControlType, FrameProps } from "framer"
import { useInteractionState } from "./Hooks"
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
	resize: boolean | "width" | "height"
	onResize: (width: number, height: number) => void
	onTap: (event: any, info: any) => void
}

export function Link(props: Partial<Props>) {
	// Grab the properties we want to use from props
	const { text, icon, type, resize, style, onTap, ...rest } = props
	const { disabled } = props

	/* ---------------------------------- State --------------------------------- */

	const [interactiveState, interactiveProps] = useInteractionState({
		disabled,
		style: props.style,
	})

	/* ----------------------------- Event Handlers ----------------------------- */

	// When the user taps on the button, run onTap
	const handleTap = (event: any, info: any) => {
		// Call onTap with the toggled state
		onTap(event, info)
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

	return !icon || icon === "none" ? (
		<Text
			// Constant props
			{...rest}
			{...interactiveProps}
			type="link"
			color={theme[type].foreground}
			resize={resize}
			onResize={props.onResize}
			text={text}
			onTap={!disabled && handleTap}
		/>
	) : (
		<Frame
			background="none"
			{...rest}
			{...interactiveProps}
			onTap={!disabled && props.onTap}
		>
			<Icon center icon={icon} color={theme[type].foreground} />
		</Frame>
	)
}

Link.defaultProps = {
	height: 60,
	width: 200,
	disabled: false,
	type: "primary",
	text: "Get Started!",
	icon: "none",
	resize: false,
	background: "none",
	onTap: () => null,
	onResize: (width, height) => null,
}

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
