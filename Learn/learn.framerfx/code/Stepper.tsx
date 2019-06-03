import * as React from "react"
import { Stack, FrameProps, addPropertyControls, ControlType } from "framer"
import { Button } from "./Button"
import { Text } from "./Text"
import { colors } from "./canvas"
import { clamp } from "./Utils"

type Props = Partial<FrameProps> & {
	value: number
	disabled: boolean
	min: number
	max: number
	step: number
	clamp: boolean // used only for property controls
	validation: (value: number) => boolean
	onValueChange: (value: number, valid: boolean) => any
}

export function Stepper(props: Props) {
	const {
		value,
		onValueChange,
		validation,
		min,
		max,
		step,
		disabled,
		...rest
	} = props

	const [state, setState] = React.useState({
		value: clamp(value, min, max),
		valid: validation(value),
	})

	React.useEffect(() => {
		setState({
			value,
			valid: validation(value),
		})
	}, [value])

	const handleValueChange = (change: 1 | -1) => {
		const next = clamp(state.value + change * step, min, max)
		if (next === state.value) return

		console.log("next")

		onValueChange(next, validation(next))
		setState({
			value: next,
			valid: validation(value),
		})
	}

	const { valid } = state

	const variants = {
		disabled: {
			background: colors.Light,
			border: `1px solid ${colors.Neutral}`,
		},
		initial: {
			background: colors.Light,
			border: `1px solid ${colors.Border}`,
		},
		hovered: {
			background: colors.Light,
			border: `1px solid ${colors.Neutral}`,
		},
		active: {
			background: colors.Light,
			border: `1px solid ${colors.Active}`,
		},
		warn: {
			background: colors.Warn,
			border: `1px solid ${colors.Warn}`,
		},
	}

	return (
		<Stack
			height={50}
			direction="horizontal"
			alignment="center"
			gap={1}
			borderRadius={12}
			overflow="hidden"
			border={`1px solid ${
				valid ? (disabled ? colors.Border : colors.Primary) : colors.Warn
			}`}
			background={colors.Light}
			{...rest}
		>
			<Button
				type="primary"
				icon="remove"
				height={50}
				width={64}
				disabled={disabled}
				borderRadius={`8px 0px 0px 8px`}
				onTap={() => handleValueChange(-1)}
			/>
			<Text type="link" width="1fr" height={50} text={state.value.toString()} />
			<Button
				type="primary"
				icon="add"
				height={50}
				width={64}
				disabled={disabled}
				borderRadius={`0px 8px 8px 0px`}
				onTap={() => handleValueChange(1)}
			/>
		</Stack>
	)
}

Stepper.defaultProps = {
	height: 50,
	width: 200,
	min: 0,
	max: Infinity,
	step: 1,
	value: 0,
	validation: (value: number) => true,
	disabled: false,
	onValueChange: (value: number, valid: boolean) => null,
}

addPropertyControls(Stepper, {
	value: {
		title: "Value",
		type: ControlType.Number,
		displayStepper: true,
		defaultValue: 0,
		min: -Infinity,
		max: Infinity,
	},
	clamp: {
		title: "Clamp Value",
		type: ControlType.Boolean,
		defaultValue: false,
	},
	min: {
		title: "Min",
		type: ControlType.Number,
		displayStepper: true,
		min: 0,
		max: Infinity,
		defaultValue: 0,
		hidden: ({ clamp }) => !clamp,
	},
	max: {
		title: "Max",
		type: ControlType.Number,
		displayStepper: true,
		min: 0,
		max: Infinity,
		defaultValue: 10,
		hidden: ({ clamp }) => !clamp,
	},
	step: {
		title: "Step",
		type: ControlType.Number,
		displayStepper: true,
		min: 0,
		max: Infinity,
		defaultValue: 1,
	},
	disabled: {
		type: ControlType.Boolean,
		title: "Disabled",
		defaultValue: false,
	},
})
