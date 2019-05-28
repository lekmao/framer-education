import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { colors } from "./canvas"
import { iconNames, iconTitles } from "./Utils"
import { Interactive } from "./Interactive"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`

export function Icon(props) {
    const {
        icon,
        color,
        button,
        interactive,
        disabled,
        height,
        width,
        size,
    } = props

    let className = "material-icons"
    className += " md-" + size

    return (
        <Interactive
            {...props as any}
            height={height}
            width={width}
            active={interactive}
            hover={interactive}
            disabled={disabled}
        >
            <Frame background="none" center size={size}>
                <GlobalStyles />
                <i
                    className={className}
                    aria-hidden="true"
                    style={{
                        color,
                    }}
                >
                    {props.icon}
                </i>
            </Frame>
        </Interactive>
    )
}

Icon.defaultProps = {
    icon: "camera",
    color: colors.Primary,
    height: 40,
    width: 40,
    size: 24,
    interactive: false,
    disabled: false,
}

addPropertyControls(Icon, {
    icon: {
        title: "Icon",
        type: ControlType.Enum,
        options: iconNames,
        optionTitles: iconTitles,
        defaultValue: "camera",
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: colors.Primary,
    },
    size: {
        title: "Color",
        type: ControlType.Number,
        min: 0,
        max: 96,
        defaultValue: 24,
    },
    interactive: {
        type: ControlType.Boolean,
        title: "Interactive",
        defaultValue: false,
    },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        defaultValue: false,
    },
})
