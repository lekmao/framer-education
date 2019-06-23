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
import { RowItem } from "./RowItem"

type ListItem = {
    text: string
    onTap: (item) => void
    component: string
    icon: string
    value: number | boolean
    onValueChange: (value) => void
}

type Props = Partial<ScrollProps> & {
    items: ListItem[]
    emptyText?: string
}

export function ItemList(props: Props) {
    const { items, emptyText, ...rest } = props

    const contentHeight = items.length * 50

    return (
        <Scroll {...rest} contentHeight={contentHeight}>
            <Stack width="100%" height={contentHeight} direction="vertical">
                {items.length > 0 ? (
                    items.map((item, index) => {
                        return (
                            <RowItem
                                key={`item_${index}`}
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

ItemList.defaultProps = {
    width: 320,
    height: 520,
    items: [],
    emptyText: "Nothing to see here.",
}

addPropertyControls(ItemList, {
    emptyText: {
        title: "Empty Text",
        type: ControlType.String,
        defaultValue: "Nothing to see here.",
    },
})
