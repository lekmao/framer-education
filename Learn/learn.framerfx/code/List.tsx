import * as React from "react"
import {
    Frame,
    ScrollProps,
    Stack,
    Scroll,
    addPropertyControls,
    ControlType,
} from "framer"
import { Text } from "./Text"

type Props = Partial<ScrollProps> & {
    content: any[]
    gap: number
    emptyText?: string
    padding: number
    paddingTop: number
    paddingLeft: number
    paddingRight: number
    paddingBottom: number
    paddingPerSide: boolean
}

export function List(props: Props) {
    const {
        content,
        gap,
        emptyText,
        paddingPerSide,
        padding,
        paddingTop,
        paddingLeft,
        paddingRight,
        paddingBottom,
        ...rest
    } = props

    // Calculate paddings
    const paddings = paddingPerSide
        ? {
              paddingRight,
              paddingBottom,
              paddingLeft,
              paddingTop,
          }
        : paddingPerSide === undefined
        ? {
              padding,
              paddingRight: paddingRight || padding,
              paddingBottom: paddingBottom || padding,
              paddingLeft: paddingLeft || padding,
              paddingTop: paddingTop || padding,
          }
        : {
              padding,
          }

    return (
        <Scroll {...rest}>
            <Stack width="100%" direction="vertical" gap={gap} {...paddings}>
                {content.length > 0 ? (
                    content
                ) : (
                    // content.map((item, index) =>
                    //     React.cloneElement(item, { key: index })
                    // )
                    <Text
                        height={128}
                        width="1fr"
                        type="body"
                        text={emptyText}
                    />
                )}
            </Stack>
        </Scroll>
    )
}

List.defaultProps = {
    width: 320,
    height: 520,
    content: [],
    gap: 8,
    emptyText: "Nothing to see here.",
    padding: 0,
}

addPropertyControls(List, {
    emptyText: {
        title: "Empty Text",
        type: ControlType.String,
        defaultValue: "Nothing to see here.",
    },
    gap: {
        title: "Gap",
        type: ControlType.Number,
        displayStepper: true,
        defaultValue: 8,
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
    content: {
        title: "Content",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
        defaultValue: [],
    },
})
