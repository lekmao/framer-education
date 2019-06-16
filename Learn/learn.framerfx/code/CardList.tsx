import * as React from "react"
import { Frame, ScrollProps, Stack, Scroll } from "framer"
import { Card } from "./Card"

type Item = {
    text: string
    onTap: (item) => void
    component: string
    icon: string
    value: string
    onValueChange: (value) => void
}

type Props = Partial<ScrollProps> & {
    items: Item[]
}

export function CardList(props) {
    const { items, ...rest } = props

    const contentHeight = props.items.length * 336
    return (
        <Scroll {...props} contentHeight={contentHeight}>
            <Stack
                width="100%"
                height={contentHeight}
                direction="vertical"
                gap={16}
                padding={16}
                background="none"
            >
                {props.items.map((item, index) => {
                    return (
                        <Card
                            key={`item_${index}`}
                            width="1fr"
                            height={320}
                            {...item}
                        />
                    )
                })}
            </Stack>
        </Scroll>
    )
}

CardList.defaultProps = {
    width: 320,
    height: 520,
    items: [],
}
