import * as React from "react"
import { Frame, ScrollProps, Stack, Scroll } from "framer"
import { RowItem } from "./RowItem"

type Item = {
    text: string
    onTap: (item) => void
    component: string
    icon: string
    value: number | boolean
    onValueChange: (value) => void
}

type Props = Partial<ScrollProps> & {
    items: Item[]
}

export function ItemList(props: Props) {
    const { items, ...rest } = props

    const contentHeight = props.items.length * 50

    return (
        <Scroll {...rest} contentHeight={contentHeight}>
            <Stack width="100%" height={contentHeight} direction="vertical">
                {props.items.map((item, index) => {
                    return (
                        <RowItem key={`item_${index}`} width="1fr" {...item} />
                    )
                })}
            </Stack>
        </Scroll>
    )
}

ItemList.defaultProps = {
    width: 320,
    height: 520,
    items: [],
}
