import { Override, Data } from "framer"

const appState = Data({
    listItems: ["Item A", "Item B", "Item C"],
})

export function ItemList(): Override {
    const handleTap = index => {
        const { listItems } = appState
        listItems.splice(index, 1)
        appState.listItems = listItems
    }

    return {
        items: appState.listItems.map((item, index) => {
            return {
                text: item,
                component: "icon",
                icon: "close",
                onTap: () => handleTap(index),
            }
        }),
    }
}
