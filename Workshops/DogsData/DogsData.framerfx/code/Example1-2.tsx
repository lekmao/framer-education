import { Override } from "framer"

const listItems = ["Item A", "Item B", "Item C"]

export function ItemList(): Override {
    return {
        items: listItems.map((item, index) => {
            return {
                text: item,
            }
        }),
    }
}
