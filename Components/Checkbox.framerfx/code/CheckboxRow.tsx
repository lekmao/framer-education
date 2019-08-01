import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { Checkbox } from "./Checkbox"

export function CheckboxRow(props) {
    const { text, checked, indeterminate, onValueChange, ...rest } = props

    const checkboxProps = { checked, indeterminate, onValueChange }

    return (
        <Stack
            name="RowContainer"
            {...rest}
            direction="horizontal"
            gap={0}
            paddingLeft={8}
            background="#fff" // temp
        >
            <Frame
                name="TextContainer"
                width="1fr"
                height="100%"
                background="none"
                style={{
                    fontSize: 16,
                    justifyContent: "none",
                }}
            >
                {text}
            </Frame>
            <Checkbox {...checkboxProps} />
        </Stack>
    )
}

CheckboxRow.defaultProps = {
    height: 44,
    width: 320,
    text: "Hello Framer",
    checked: true,
    indeterminate: false,
    onValueChange: () => null,
}

addPropertyControls(CheckboxRow, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer",
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    indeterminate: {
        title: "Indeterminate",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
