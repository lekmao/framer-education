import * as React from "react"
import {
    Frame,
    ScrollProps,
    Stack,
    Scroll,
    addPropertyControls,
    ControlType,
} from "framer"
import { Card } from "./Card"
import { Text } from "./Text"

type Item = {
    text: string
    height: number
    component: string
    icon: string
    value: string
    emptyText: string
    onTap: () => void
    onValueChange: (value) => void
}

type Props = Partial<ScrollProps> & {
    items: Item[]
    emptyText: string
}

export function CardList(props: Props) {
    const { items, emptyText, ...rest } = props

    const contentHeight = props.items.reduce(
        (acc, cur) => acc + (cur.height || 320) + 16,
        16 + 16 + 8
    )

    return (
        <Scroll {...rest} contentHeight={contentHeight}>
            <Stack
                width="100%"
                height={contentHeight}
                direction="vertical"
                gap={16}
                padding={16}
                background="none"
            >
                {props.items.length > 0 ? (
                    props.items.map((item, index) => {
                        return (
                            <Card
                                key={`item_${index}_${item.text}`}
                                width="1fr"
                                {...item}
                            />
                        )
                    })
                ) : (
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

CardList.defaultProps = {
    width: 320,
    height: 520,
    items: [],
    emptyText: "Nothing to see here.",
}

addPropertyControls(CardList, {
    emptyText: {
        type: ControlType.String,
        defaultValue: "Nothing to see here.",
    },
})
