import * as React from 'react'
import { Frame, addPropertyControls, ControlType, FrameProps } from 'framer'
import { Icon } from './Icon'
import { Text } from './Text'
import { iconNames, iconTitles } from './Shared'
import { useInteractionState } from './Hooks'
import { colors } from './canvas'

type Props = Partial<FrameProps> &
	Partial<{
		text: string
		icon: string
		type: string
		toggle: boolean
		toggled: boolean
		disabled: boolean
		onTap?: (toggled: boolean | null) => void
	}>

export function Button(props: Props) {
	const {
		type,
		text,
		icon,
		onTap,
		disabled,
		toggle,
		toggled: initialToggled,
		style,
		...rest
	} = props

	/* ---------------------------------- State --------------------------------- */

	// Initialize state with props values
	const [state, setState] = React.useState({
		toggled: toggle ? initialToggled || false : null,
	})

	// When the hook receives new props, overwrite the state
	React.useEffect(() => {
		setState({
			...state,
			toggled: toggle ? initialToggled || false : null,
		})
	}, [initialToggled])

	const [interactiveState, interactiveProps] = useInteractionState({
		disabled,
		toggled: state.toggled,
		style,
	})

	/* ----------------------------- Event Handlers ----------------------------- */

	// When the user taps on the button, run onTap and update toggled
	const handleTap = (event, info) => {
		if (toggle) {
			const toggled = !state.toggled
			onTap(toggled)
			setState({
				...state,
				toggled,
			})
		} else {
			onTap(null)
		}
	}

	/* ------------------------------ Presentation ------------------------------ */

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
			background: 'none',
		},
	}

	const variants = {
		initial: {
			style: {
				filter: `brightness(1)`,
			},
		},
		hovered: {
			style: {
				filter: `brightness(1.055)`,
			},
		},
		toggled: {
			style: {
				filter: `brightness(.8)`,
			},
		},
		active: {
			style: {
				filter: `brightness(.95)`,
			},
		},
	}

	const variant =
		type === 'ghost'
			? { border: `1px solid ${colors.Primary}` }
			: variants[interactiveState]

	return (
		<Frame
			{...rest}
			{...interactiveProps}
			onTap={!disabled && handleTap}
			borderRadius={8}
			background={theme[type].background}
			{...variant}
			style={{ ...variant.style, ...interactiveProps.style, ...style }}
		>
			{icon === 'none' ? (
				<Text
					// Constant props
					center
					type="link"
					color={theme[type].foreground}
					text={text}
				/>
			) : (
				<Icon center icon={icon} color={theme[type].foreground} />
			)}
		</Frame>
	)
}

Button.defaultProps = {
	height: 60,
	width: 320,
	borderRadius: 8,
	disabled: false,
	text: 'Get Started!',
	icon: 'none',
	type: 'primary',
	primary: true,
	toggle: false,
	onTap: () => null,
}

addPropertyControls(Button, {
	text: {
		type: ControlType.String,
		title: 'Text',
		defaultValue: 'Get Started!',
	},
	type: {
		type: ControlType.Enum,
		options: ['primary', 'secondary', 'accent', 'warn', 'neutral', 'ghost'],
		optionTitles: [
			'Primary',
			'Secondary',
			'Accent',
			'Warn',
			'Neutral',
			'Ghost',
		],
		defaultValue: 'primary',
	},
	icon: {
		title: 'Icon',
		type: ControlType.Enum,
		options: ['none', ...iconNames],
		optionTitles: ['None', ...iconTitles],
		defaultValue: 'none',
	},
	toggle: {
		type: ControlType.Boolean,
		title: 'Toggle',
		defaultValue: false,
	},
	toggled: {
		type: ControlType.Boolean,
		title: 'Toggled',
		defaultValue: false,
		hidden: ({ toggle }) => !toggle,
	},
	disabled: {
		type: ControlType.Boolean,
		title: 'Disabled',
		defaultValue: false,
	},
})
