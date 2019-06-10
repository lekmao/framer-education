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
	const { height, width, disabled } = props

	const [state, setState] = React.useState({
		width: resize ? 300 : width,
	})

	React.useEffect(() => {
		setState(state => ({ width: width as number }))
	}, [width])

	/* ----------------------------- Event Handlers ----------------------------- */

	// When the user taps on the button, run onTap
	const handleTap = (event: any, info: any) => {
		// Call onTap with the toggled state
		onTap(event, info)
	}

	const handleResize = (w: number, height: number) => {
		if (resize && state.width !== w) {
			setState(state => ({ width: w }))
			props.onResize(w, height)
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

	const [interactiveState, interactiveProps] = useInteractionState({
		disabled,
		style: props.style,
	})

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
