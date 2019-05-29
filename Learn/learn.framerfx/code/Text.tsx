import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { colors } from "./canvas"

export function Text(props) {
	const {
		fontSize,
		text,
		fontWeight,
		color,
		children,
		align,
		textAlign,
		type,
		paddingPerSide,
		padding,
		paddingTop,
		paddingLeft,
		paddingRight,
		paddingBottom,
	} = props

	const sharedStyles = {
		fontFamily: "Helvetica Neue",
		fontWeight: "normal",
		lineSpacing: 1.2,
	}

	const typeStyles = {
		display: {
			fontSize: 64,
			letterSpacing: -1,
			fontWeight: "bold",
		},
		h1: {
			fontSize: 40,
			letterSpacing: -1,
			fontWeight: "bold",
		},
		h2: {
			fontSize: 24,
			fontWeight: "bold",
		},
		h3: {
			fontSize: 16,
			fontWeight: "bold",
		},
		lead: {
			fontSize: 20,
		},
		body: {
			fontSize: 16,
			lineSpacing: 1.3,
		},
		link: {
			fontSize: 16,
			fontWeight: "bold",
		},
		label: {
			fontSize: 13,
			letterSpacing: 0.5,
			lineSpacing: 1.2,
			fontWeight: "bold",
			textTransform: "uppercase",
		},
		caption: {
			fontSize: 12,
			fontWeight: "normal",
		},
	}

	const horizontalAlign = {
		start: "left",
		left: "left",
		middle: "center",
		center: "center",
		right: "right",
		end: "right",
		justify: "justify",
	}

	const verticalAlign = {
		start: "flex-start",
		top: "flex-start",
		middle: "center",
		center: "center",
		bottom: "flex-end",
		end: "flex-end",
	}

	const paddings = paddingPerSide
		? {
				paddingRight,
				paddingBottom,
				paddingLeft,
				paddingTop,
		  }
		: { padding }

	console.log(children)

	return (
		<Frame
			// Constant props
			size="100%"
			background="none"
			{...props as any}
		>
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: verticalAlign[align],
				}}
			>
				<div
					style={{
						width: "100%",
						...sharedStyles,
						...typeStyles[type],
						color,
						textAlign: horizontalAlign[textAlign],
						...paddings,
					}}
				>
					{children.length > 0 ? children : text}
				</div>
			</div>
		</Frame>
	)
}

Text.defaultProps = {
	text: "Text",
	type: "link",
	align: "center",
	textAlign: "center",
	color: colors.Dark,
}

addPropertyControls(Text, {
	text: {
		type: ControlType.String,
		defaultValue: "Hello world",
		title: "Text",
	},
	type: {
		type: ControlType.Enum,
		options: [
			"display",
			"h1",
			"h2",
			"h3",
			"lead",
			"link",
			"body",
			"label",
			"caption",
		],
		optionTitles: [
			"Display",
			"Heading 1",
			"Heading 2",
			"Heading 3",
			"Lead",
			"Link",
			"Body",
			"Label",
			"Caption",
		],
		defaultValue: "link",
		title: "Type",
	},
	color: {
		type: ControlType.Color,
		defaultValue: colors.Dark,
		title: "Color",
	},
	textAlign: {
		type: ControlType.SegmentedEnum,
		options: ["left", "center", "right"],
		optionTitles: ["Left", "Center", "Right"],
		defaultValue: "center",
		title: "Horizontal",
	},
	align: {
		type: ControlType.SegmentedEnum,
		options: ["top", "center", "bottom"],
		optionTitles: ["Top", "Center", "Bottom"],
		defaultValue: "center",
		title: "Vertical",
	},
	padding: {
		type: ControlType.FusedNumber,
		title: "Padding",
		toggleKey: "paddingPerSide",
		toggleTitles: ["All Sides", "Per Side"],
		valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
		valueLabels: ["T", "R", "B", "L"],
		min: 0,
	},
})
