import * as React from "react"
import {
    Frame,
    Stack,
    addPropertyControls,
    ControlType,
    FrameProps,
} from "framer"
import { Icon } from "./Icon"
import { Switch } from "./Switch"
import { Checkbox } from "./Checkbox"
import { Radio } from "./Radio"
import { Text } from "./Text"
import { Stepper } from "./Stepper"
import { iconNames, iconTitles } from "./Shared"
import { colors } from "./canvas"

type Props = Partial<FrameProps> & {
    text: string
    component: string
    icon: string
    clamp: boolean
    min: number
    max: number
    step: number
    value: number | boolean
    required: boolean
    pc_number_value: number
    pc_boolean_value: boolean
    paddingLeft: number
    validation: (value: boolean | number) => boolean
    disabled: boolean
    onValueChange: (value: boolean | number) => void
    color: string
}

export function RowItem(props: Partial<Props>) {
    const {
        text,
        component,
        icon,
        value: overrideValue,
        pc_number_value = 0,
        pc_boolean_value = false,
        paddingLeft,
        validation,
        disabled,
        onValueChange,
        color,
        clamp,
        min,
        max,
        step,
        ...rest
    } = props

    const { height } = props

    const computedValue =
        overrideValue === undefined
            ? component === "stepper"
                ? pc_number_value
                : pc_boolean_value
            : overrideValue

    const inputProps = {
        disabled,
        validation,
        onValueChange,
        value: computedValue as boolean,
    }

    const stepperProps = {
        ...inputProps,
        clamp,
        min,
        max,
        step,
        value: computedValue as number,
    }

    const components = React.useMemo(() => {
        return {
            icon: <Icon icon={icon} color={color} />,
            switch: <Switch {...inputProps} />,
            checkbox: <Checkbox {...inputProps} />,
            radio: <Radio {...inputProps} />,
            stepper: <Stepper {...stepperProps} />,
        }
    }, [stepperProps, inputProps, computedValue])

    return (
        <Frame
            background="none"
            {...rest}
            style={{ ...props.style, cursor: "pointer" }}
        >
            <Stack
                height="100%"
                width="100%"
                direction="horizontal"
                alignment="center"
                distribution="space-between"
                gap={0}
                padding={0}
            >
                <Text
                    type="body"
                    textAlign="left"
                    width={"auto"}
                    height="100%"
                    text={text}
                    paddingLeft={paddingLeft}
                />
                {components[component]}
            </Stack>
        </Frame>
    )
}

RowItem.defaultProps = {
    height: 50,
    width: 250,
    text: "Row Item",
    component: "none",
    required: false,
    validation: () => true,
    onValueChange: () => null,
    icon: "chevron-right",
    color: colors.Primary,
    onTap: () => null,
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
        options: ["none", "checkbox", "radio", "switch", "icon", "stepper"],
        optionTitles: [
            "None",
            "Checkbox",
            "Radio",
            "Switch",
            "Icon",
            "Stepper",
        ],
        defaultValue: "none",
    },
    pc_number_value: {
        title: "Value",
        type: ControlType.Number,
        displayStepper: true,
        defaultValue: 0,
        min: -Infinity,
        max: Infinity,
        hidden: ({ component }) => component !== "stepper",
    },
    pc_boolean_value: {
        title: "Value",
        type: ControlType.Boolean,
        defaultValue: false,
        hidden: ({ component }) => component === "stepper",
    },
    icon: {
        title: "Icon",
        type: ControlType.Enum,
        options: iconNames,
        optionTitles: iconTitles,
        defaultValue: "chevron-right",
        hidden: ({ right, component }) =>
            component === "stepper" || right !== "icon",
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: colors.Primary,
        hidden: ({ right, component }) =>
            component === "stepper" || right !== "icon",
    },
    clamp: {
        title: "Clamp Value",
        type: ControlType.Boolean,
        defaultValue: false,
        hidden: ({ component }) => component !== "stepper",
    },
    min: {
        title: "Min",
        type: ControlType.Number,
        displayStepper: true,
        min: 0,
        max: Infinity,
        defaultValue: 0,
        hidden: ({ clamp, component }) => component !== "stepper" || !clamp,
    },
    max: {
        title: "Max",
        type: ControlType.Number,
        displayStepper: true,
        min: 0,
        max: Infinity,
        defaultValue: 10,
        hidden: ({ clamp, component }) => component !== "stepper" || !clamp,
    },
    step: {
        title: "Step",
        type: ControlType.Number,
        displayStepper: true,
        min: 0,
        max: Infinity,
        defaultValue: 1,
        hidden: ({ component }) => component !== "stepper",
    },
})
