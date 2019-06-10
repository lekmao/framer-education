import * as React from "react"
import {
    Frame,
    Color,
    addPropertyControls,
    ControlType,
    FrameProps,
} from "framer"
import { iconNames, iconTitles } from "./Shared"
import { colors } from "./canvas"
import { url } from "framer/resource"

type Props = Partial<FrameProps> & {
    icon: string
    size?: number
    color?: string
}

const randomId =
    Math.random()
        .toString(36)
        .substring(2, 15) +
    Math.random()
        .toString(36)
        .substring(2, 15)

const toColor = sharedColor => sharedColor.match(/rgba?\(([^)]+)\)/g)[0]

export function Icon(props: Props) {
    const { id, icon, color, size, height, width, ...rest } = props

    const iconSize = size * (58 / 48)

    const offset = iconNames.indexOf(icon) * -iconSize

    const { r, g, b, a } = Color(
        color.includes("--token") ? toColor(color) : color
    )

    const n = v => v / 255

    return (
        <Frame
            {...rest}
            height={height || size}
            width={width || size}
            background="none"
        >
            <svg display="hidden" viewBox={`0 0 ${size} ${size}`}>
                <filter
                    id={randomId + "_colorMap"}
                    colorInterpolationFilters="sRGB"
                    x="0"
                    y="0"
                >
                    <feColorMatrix
                        type="matrix"
                        values={`${n(r)} 0 0 0 0
                                 0 ${n(g)} 0 0 0
                                 0 0 ${n(b)} 0 0
                                 0 0 0    ${a} 0`}
                    />
                </filter>
            </svg>
            <Frame
                center
                size={size}
                background="none"
                style={{
                    backgroundImage: `url("${url()}code/icons.png")`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `0 ${offset}px`,
                    backgroundSize: `${size}px auto`,
                    filter: `invert(1) url(#${randomId + "_colorMap"})`,
                }}
            />
        </Frame>
    )
}

Icon.defaultProps = {
    icon: "ac_unit",
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
})
