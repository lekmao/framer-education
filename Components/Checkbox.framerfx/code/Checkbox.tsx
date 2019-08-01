import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Icons_Check, Icons_Indeterminate } from "./canvas"

export function Checkbox(props) {
    const { checked, indeterminate, onValueChange, ...rest } = props

    // State

    const [isChecked, setChecked] = React.useState(checked)

    React.useEffect(() => {
        setChecked(checked)
    }, [checked])

    // Events

    const handleTap = () => {
        const next = !isChecked
        onValueChange(next)
        setChecked(next)
    }

    // Presentation

    let Icon

    if (indeterminate) {
        Icon = Icons_Indeterminate
    } else if (isChecked) {
        Icon = Icons_Check
    }

    return (
        <Frame name="TouchTarget" {...rest} background="none" onTap={handleTap}>
            <Frame
                name="IconContainer"
                size={24}
                center
                borderRadius={4}
                background="none"
                border="2px solid #0099FF"
            />
            {Icon && <Icon center />}
        </Frame>
    )
}

Checkbox.defaultProps = {
    height: 44,
    width: 44,
    checked: true,
    indeterminate: false,
    onValueChange: () => null,
}

addPropertyControls(Checkbox, {
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
