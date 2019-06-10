import * as React from 'react'
import { addPropertyControls, ControlType, Stack, FrameProps } from 'framer'
import { RowItem } from './RowItem'
import { colors } from './canvas'

type Props = Partial<FrameProps> & {
	value: string[]
	options: string[]
	required: boolean
	disabled: boolean
	validation: (value: string[], indices: boolean[]) => boolean
	onValueChange: (value: string[], valid: boolean) => void
}

export function CheckboxGroup(props: Partial<Props>) {
	const {
		value: initial,
		options,
		required,
		disabled,
		validation,
		onValueChange,
		...rest
	} = props

	/* ---------------------------------- State --------------------------------- */

	const initialIndices = (options || []).map((o) => false)

	for (let option of initial) {
		const index = typeof option === 'number' ? option : options.indexOf(option)

		initialIndices[index] = true
	}

	const initialValue = options.filter((option, i) => initialIndices[i])

	// Get a valid state for the current value
	const validate = (value, indices) =>
		value && value.length > 0 ? validation(value, indices) : !required

	// Initialize state with props values
	const [state, setState] = React.useState({
		value: initialValue,
		selectedIndices: initialIndices,
		valid: validation(initialValue, initialIndices),
	})

	// When the hook receives new props values, overwrite the state
	React.useEffect(() => {
		setState({
			...state,
			value: initialValue,
			selectedIndices: initialIndices,
			valid: validate(initialValue, initialIndices),
		})
	}, [options, initial])

	// Re-validate when required or validation changes
	React.useEffect(() => {
		setState({
			...state,
			valid: validate(state.value, state.selectedIndices),
		})
	}, [required, validation])

	/* ----------------------------- Event Handlers ----------------------------- */

	const { value, valid, selectedIndices } = state

	// When the user selects an option, updatet state and run onValueChange
	const setSelectedIndex = (index: number, bool: boolean) => {
		if (disabled) return

		const selectedIndices = [...state.selectedIndices]
		selectedIndices[index] = bool

		const value = options.filter((option, i) => selectedIndices[i])

		const valid = validation(value, selectedIndices)

		onValueChange(value, valid)

		setState({
			...state,
			value,
			valid,
			selectedIndices,
		})
	}

	/* ------------------------------- Presntation ------------------------------ */

	return (
		<Stack
			{...rest}
			height={options.length * 50}
			direction="vertical"
			alignment="center"
			borderRadius={12}
			overflow="hidden"
			gap={1}
			border={`1px solid ${valid ? colors.Border : colors.Warn}`}
			background={disabled ? colors.Light : colors.Border}
		>
			{options.map((option, index) => {
				// An option is selected if its index matches the state's selectedIndex
				return (
					<RowItem
						key={`${props.id}_option_${index}`}
						width="100%"
						height={49}
						text={option}
						component="checkbox"
						disabled={disabled}
						value={selectedIndices[index]}
						validation={() => valid}
						background={colors.Light}
						paddingLeft={16}
						onTap={() =>
							!disabled && setSelectedIndex(index, !selectedIndices[index])
						}
					/>
				)
			})}
		</Stack>
	)
}

// Set the component's default properties
CheckboxGroup.defaultProps = {
	value: ['Paris'],
	options: ['Paris', 'New York', 'London', 'Hong Kong'],
	height: 200,
	width: 320,
	required: false,
	disabled: false,
	onValueChange: () => null,
	validation: () => true,
}

// Set the component's property controls
addPropertyControls(CheckboxGroup, {
	value: {
		type: ControlType.Array,
		propertyControl: {
			type: ControlType.String,
		},
		defaultValue: ['Paris'],
		title: 'Value',
	},
	options: {
		type: ControlType.Array,
		propertyControl: {
			type: ControlType.String,
		},
		defaultValue: ['Paris', 'New York', 'London', 'Hong Kong'],
		title: 'Options',
	},
	required: {
		type: ControlType.Boolean,
		defaultValue: false,
		title: 'Required',
	},
	disabled: {
		type: ControlType.Boolean,
		defaultValue: false,
		title: 'Disabled',
	},
})
