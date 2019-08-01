import { Override, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const appState = Data({
    total: 0,
    items: [
        {
            name: "Candy Bar",
            price: 1,
            quantity: 1,
        },
        {
            name: "Soda",
            price: 1.5,
            quantity: 2,
        },
        {
            name: "Latte",
            price: 4.25,
            quantity: 3,
        },
        {
            name: "Coffee",
            price: 1.75,
            quantity: 1,
        },
    ],
})

export function ItemList(): Override {
    return {
        items: appState.items.map((item, index) => {
            return {
                text: item.name,
                message: `$${item.price.toFixed(2)}`,
                value: item.quantity,
                min: 1,
                max: 10,
                component: "stepper",
                onValueChange: quantity => {
                    const localItems = [...appState.items]
                    localItems[index].quantity = quantity

                    appState.items = localItems
                },
            }
        }),
    }
}

export function Total(): Override {
    const total = appState.items.reduce((runningTotal, item) => {
        runningTotal += item.price * item.quantity
        return runningTotal
    }, 0)

    return {
        text: "$" + total.toFixed(2),
    }
}
