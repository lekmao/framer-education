import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { colors } from "./canvas"

export function Text(props) {
    const {
        size,
        height,
        width,
        fontSize,
        text,
        fontWeight,
        color,
        align,
        textAlign,
        type,
        paddingPerSide,
        padding,
        paddingTop,
        paddingLeft,
        paddingRight,
        paddingBottom,
        resize,
        onResize,
    } = props

    const resizeRef = React.createRef<HTMLDivElement>()

    const [state, setState] = React.useState({
        width: size || width,
    })

    React.useLayoutEffect(() => {
        if (!resizeRef.current) return

        const { offsetWidth, offsetHeight } = resizeRef.current

        onResize(offsetWidth, offsetHeight)

        if (resize) {
            setState({
                width: offsetWidth + 1,
            })
        }
    }, [text, resize])

    const sharedStyles = {
        fontFamily: "Helvetica Neue",
        fontWeight: 500,
        lineSpacing: 1.2,
    }

    const typeStyles = {
        display: {
            fontSize: 64,
            letterSpacing: -1,
            fontWeight: 600,
        },
        h1: {
            fontSize: 40,
            letterSpacing: -1,
            fontWeight: 600,
        },
        h2: {
            fontSize: 24,
            fontWeight: 600,
        },
        h3: {
            fontSize: 16,
            fontWeight: 600,
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
            fontWeight: 600,
        },
        label: {
            fontSize: 13,
            letterSpacing: 0.5,
            lineSpacing: 1.2,
            fontWeight: 600,
            textTransform: "uppercase",
        },
        caption: {
            fontSize: 12,
            fontWeight: 500,
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

    const horizontalFlexAlign = {
        start: "flex-start",
        left: "flex-start",
        middle: "center",
        center: "center",
        right: "flex-right",
        end: "flex-right",
        justify: "center",
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

    return (
        <Frame
            // Constant props
            height={size || height}
            width={state.width}
            background="none"
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: verticalAlign[align],
                    justifyContent: horizontalFlexAlign[textAlign],
                }}
            >
                <div
                    ref={resizeRef}
                    style={{
                        ...sharedStyles,
                        ...typeStyles[type],
                        color,
                        width: resize ? "fit-content" : "100%",
                        textAlign: horizontalAlign[textAlign],
                        ...paddings,
                    }}
                >
                    {text}
                </div>
            </div>
        </Frame>
    )
}

Text.defaultProps = {
    width: 200,
    height: 50,
    text: "Text",
    type: "link",
    align: "center",
    textAlign: "center",
    color: colors.Dark,
    resize: false,
    onResize: (width, height) => null,
}

addPropertyControls(Text, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello world",
    },
    type: {
        title: "Type",
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
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: colors.Dark,
    },
    textAlign: {
        title: "Horizontal",
        type: ControlType.SegmentedEnum,
        options: ["left", "center", "right"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: "left",
    },
    align: {
        title: "Vertical",
        type: ControlType.SegmentedEnum,
        options: ["top", "center", "bottom"],
        optionTitles: ["Top", "Center", "Bottom"],
        defaultValue: "top",
    },
    padding: {
        title: "Padding",
        type: ControlType.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["All Sides", "Per Side"],
        valueKeys: [
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
    },
})
