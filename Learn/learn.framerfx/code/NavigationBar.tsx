import * as React from "react"
import { Stack, FrameProps, addPropertyControls, ControlType } from "framer"
import { colors } from "./canvas"
import { Icon } from "./Icon"
import { Text } from "./Text"
import { Interactive } from "./Interactive"
import { iconNames, iconTitles } from "./Utils"

interface Props extends FrameProps {
	title: string
	subtitle: string
	leftLink: string
	leftIcon: string
	rightLink: string
	rightIcon: string
	onLeftTap: () => void
	onRightTap: () => void
	large: boolean
}

export function NavigationBar(props: Partial<Props>) {
	const {
		id,
		height,
		width,
		title,
		subtitle,
		leftLink,
		leftIcon,
		rightLink,
		rightIcon,
		onLeftTap,
		onRightTap,
		large,
	} = props

	return (
		<Stack
			direction="vertical"
			height={height}
			width={width}
			alignment="center"
			distribution="start"
			background={colors.Bg}
		>
			<Stack
				direction="horizontal"
				height={88}
				width="100%"
				distribution="space-between"
				alignment="end"
				gap={-8}
				paddingBottom={large ? 1 : 0}
				style={{
					borderBottom: large ? `` : `1px solid ${colors.Border}`,
				}}
			>
				<Interactive width="1fr" height={44}>
					<Stack
						width="100%"
						height="100%"
						alignment="center"
						distribution="start"
						direction="horizontal"
						gap={0}
						onTap={onLeftTap}
						paddingLeft={leftIcon && leftIcon !== "none" ? 0 : 16}
					>
						{leftIcon && leftIcon !== "none" && <Icon y={1} icon={leftIcon} />}
						{leftLink && leftLink.length > 1 && (
							<Text
								width={75}
								align="center"
								textAlign="left"
								color={colors.Primary}
								text={leftLink || null}
							/>
						)}
					</Stack>
				</Interactive>
				{large || (
					<Stack
						direction="vertical"
						width="2fr"
						height={44}
						distribution="center"
						alignment="center"
						gap={0}
					>
						<Text resize type="link" height={22} text={title} />
						{subtitle && (
							<Text resize height={13} type="caption" text={subtitle} />
						)}
					</Stack>
				)}
				<Interactive width="1fr" height={44}>
					<Stack
						width="100%"
						height="100%"
						alignment="center"
						distribution="end"
						direction="horizontal"
						gap={-8}
						onTap={onRightTap}
						paddingRight={rightIcon && rightIcon !== "none" ? 0 : 16}
					>
						{rightLink && rightLink.length > 0 && (
							<Text
								width={75}
								align="center"
								textAlign="right"
								color={colors.Primary}
								text={rightLink}
							/>
						)}
						{rightIcon && rightIcon !== "none" && (
							<Icon y={1} icon={rightIcon} />
						)}
					</Stack>
				</Interactive>
			</Stack>
			{large && (
				<Text
					height={52}
					width="100%"
					type="h1"
					textAlign="left"
					paddingTop={0}
					paddingLeft={16}
					paddingRight={16}
					paddingBottom={16}
					paddingPerSide
					text={title}
				/>
			)}
		</Stack>
	)
}

NavigationBar.defaultProps = {
	id: "Navigation_Bar",
	height: 88,
	width: 320,
	title: "Home",
	subtitle: null,
	leftText: "Back",
	leftIcon: "chevron_left",
	rightText: null,
	rightIcon: "none",
	onLeftTap: () => null,
	onRightTap: () => null,
	large: false,
}

addPropertyControls(NavigationBar, {
	title: {
		title: "Title",
		type: ControlType.String,
		defaultValue: "Home",
	},
	subtitle: {
		title: "Subtitle",
		type: ControlType.String,
		defaultValue: "",
	},
	leftLink: {
		title: "Left Link",
		type: ControlType.String,
		defaultValue: "Back",
	},
	leftIcon: {
		title: "Left Icon",
		type: ControlType.Enum,
		options: ["none", ...iconNames],
		optionTitles: ["None", ...iconTitles],
		defaultValue: "chevron_left",
	},
	rightLink: {
		title: "Right Link",
		type: ControlType.String,
		defaultValue: "",
	},
	rightIcon: {
		title: "Right Icon",
		type: ControlType.Enum,
		options: ["none", ...iconNames],
		optionTitles: ["None", ...iconTitles],
		defaultValue: "none",
	},
	large: {
		title: "Large",
		type: ControlType.Boolean,
		defaultValue: false,
	},
})
