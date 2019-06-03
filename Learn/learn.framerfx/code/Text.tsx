import * as React from "react"
import { Frame, addPropertyControls, ControlType, FrameProps } from "framer"
import { colors } from "./canvas"

type Props = Partial<FrameProps> & {
    fontSize: number
    text: string
    fontWeight: string | number
    color: string
    verticalAlign: string
    textAlign: string
    type: string
    paddingPerSide: boolean
    padding: number
    paddingTop: number
    paddingLeft: number
    paddingRight: number
    paddingBottom: number
    resize: boolean
    style: { [key: string]: any }
    onResize: (width?: number, height?: number) => void
}

export function Text(props: Partial<Props>) {
    const {
        size,
        height,
        width,
        fontSize,
        text,
        fontWeight,
        color,
        verticalAlign,
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
        style,
    } = props

    const resizeRef = React.createRef<HTMLDivElement>()

    const [state, setState] = React.useState({
        width: size || width,
    })

    React.useEffect(() => {
        setState({
            width: size || width,
        })
    }, [width, height, size])

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

    const textAligns = {
        start: "left",
        left: "left",
        middle: "center",
        center: "center",
        right: "right",
        end: "right",
        justify: "justify",
    }

    const horizontalFlexAligns = {
        start: "flex-start",
        left: "flex-start",
        middle: "center",
        center: "center",
        right: "flex-right",
        end: "flex-right",
        justify: "center",
    }

    const verticalFlexAligns = {
        start: "flex-start",
        top: "flex-start",
        middle: "center",
        center: "center",
        bottom: "flex-end",
        end: "flex-end",
    }

    const paddings = paddingPerSide
        ? { padding }
        : {
              padding: paddingPerSide === undefined ? padding : undefined,
              paddingRight,
              paddingBottom,
              paddingLeft,
              paddingTop,
          }

    return (
        <Frame
            // Constant props
            height={size || height}
            width={state.width}
            background="none"
            style={...style as any}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: verticalFlexAligns[verticalAlign],
                    justifyContent: horizontalFlexAligns[textAlign],
                }}
            >
                <div
                    ref={resizeRef}
                    style={{
                        ...sharedStyles,
                        ...typeStyles[type],
                        color,
                        width: resize ? "fit-content" : "100%",
                        textAlign: textAligns[textAlign],
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
    verticalAlign: "center",
    textAlign: "center",
    color: colors.Dark,
    resize: false,
    style: {},
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
    verticalAlign: {
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
