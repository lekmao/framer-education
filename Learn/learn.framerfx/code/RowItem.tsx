import * as React from "react"
import { Stack, addPropertyControls, ControlType, FrameProps } from "framer"
import { Interactive } from "./Interactive"
import { Icon } from "./Icon"
import { Switch } from "./Switch"
import { Checkbox } from "./Checkbox"
import { Radio } from "./Radio"
import { Text } from "./Text"
import { iconNames, iconTitles } from "./Shared"
import { colors } from "./canvas"

type Props = Partial<FrameProps> & {
    text: string
    component: string
    icon: string
    value: boolean
    validation: (value: boolean) => boolean
    disabled: boolean
    onValueChange: (value: boolean) => void
    color: string
}

export function RowItem(props: Partial<Props>) {
    const {
        text,
        component,
        icon,
        value,
        validation,
        disabled,
        onValueChange,
        color,
    } = props

    const inputProps = { value, disabled, validation, onValueChange }

    const components = {
        icon: <Icon icon={icon} color={color} />,
        switch: <Switch {...inputProps} />,
        checkbox: <Checkbox {...inputProps} />,
        radio: <Radio {...inputProps} />,
    }

    return (
        <Interactive {...props as any} height={50} active={false} hover={false}>
            <Stack
                direction="horizontal"
                alignment="center"
                distribution="space-between"
                height={50}
                paddingRight={8}
                width={"100%"}
                background={colors.Light}
            >
                <Text
                    type="body"
                    textAlign="left"
                    fontWeight="normal"
                    width={"auto"}
                    height="100%"
                    paddingPerSide
                    paddingLeft={16}
                    text={text}
                />
                {components[component]}
            </Stack>
        </Interactive>
    )
}

RowItem.defaultProps = {
    height: 49,
    width: 250,
    text: "Row Item",
    component: "none",
    value: false,
    validation: () => true,
    onValueChange: () => null,
    icon: "chevron-right",
    color: colors.Primary,
}

addPropertyControls(RowItem, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Row Item",
    },
    component: {
        title: "Right",
        type: ControlType.Enum,
        options: ["none", "checkbox", "radio", "switch", "icon"],
        optionTitles: ["None", "Checkbox", "Radio", "Switch", "Icon"],
        defaultValue: "none",
    },
    value: {
        title: "Value",
        type: ControlType.Boolean,
        defaultValue: false,
        hidden: ({ right }) => right === "none" || right === "icon",
    },
    icon: {
        title: "Icon",
        type: ControlType.Enum,
        options: iconNames,
        optionTitles: iconTitles,
        defaultValue: "chevron-right",
        hidden: ({ right }) => right !== "icon",
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: colors.Primary,
        hidden: ({ right }) => right !== "icon",
    },
})
