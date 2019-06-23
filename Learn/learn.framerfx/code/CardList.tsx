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

type ListItem = {
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
    cards: ListItem[]
    emptyText?: string
}

export function CardList(props: Props) {
    const { cards, emptyText, ...rest } = props

    const contentHeight = cards.reduce(
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
                {cards.length > 0 ? (
                    cards.map((card, index) => {
                        return (
                            <Card key={`card_${index}`} width="1fr" {...card} />
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
    cards: [],
    emptyText: "Nothing to see here.",
}

addPropertyControls(CardList, {
    emptyText: {
        title: "Empty Text",
        type: ControlType.String,
        defaultValue: "Nothing to see here.",
    },
})
