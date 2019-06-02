import * as React from "react"
import { Stack, addPropertyControls, ControlType } from "framer"
import { createGlobalStyle } from "styled-components"
import { iconNames, iconTitles } from "./Utils"
import { colors } from "./canvas"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`

export function Icon(props) {
    const { icon, color, interactive, size } = props

    let className = "material-icons"
    className += " md-" + size

    return (
        <Stack
            {...props as any}
            background={"none"}
            alignment="center"
            distribution="center"
        >
            <GlobalStyles />
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <i
                    className={className}
                    aria-hidden="true"
                    style={{
                        color,
                        fontSize: size,
                        alignSelf: "center",
                        justifySelf: "center",
                    }}
                >
                    {props.icon}
                </i>
            </div>
        </Stack>
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
        title: "Size",
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
