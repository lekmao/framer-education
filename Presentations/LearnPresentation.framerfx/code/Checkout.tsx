import { Override, Data } from "framer"
import * as React from "react"

// Override Docs: https://framer.com/docs/overrides

const state = Data({
    items: [
        {
            id: 0,
            name: "Apples",
            amount: 1,
            price: 0.5,
        },
        {
            id: 1,
            name: "Soda",
            amount: 2,
            price: 5.0,
        },
        {
            id: 3,
            name: "Bread",
            amount: 1,
            price: 2.5,
        },
    ],
    tax: 0.06,
})

export function Total(): Override {
    const total = state.items.reduce((runningTotal, item) => {
        return runningTotal + item.amount * item.price
    }, 0)

    const tax = total * (1 + state.tax)

    return {
        text: "$" + (total + tax).toFixed(2),
    }
}

export function Tax(): Override {
    const total = state.items.reduce((runningTotal, item) => {
        return runningTotal + item.amount * item.price
    }, 0)

    const tax = total * state.tax

    return {
        text: "$" + tax.toFixed(2),
    }
}

export function Item1(): Override {
    const item = state.items[0]
    return {
        text: `${item.name} ($${item.price.toFixed(2)} each)`,
        value: item.amount,
        onValueChange: value => {
            const { items } = state
            items[0].amount = value
            state.items = items
        },
    }
}

export function Item2(): Override {
    const item = state.items[1]
    return {
        text: `${item.name} ($${item.price.toFixed(2)} each)`,
        value: item.amount,
        onValueChange: value => {
            const { items } = state
            items[1].amount = value
            state.items = items
        },
    }
}

export function Item3(): Override {
    const item = state.items[2]
    return {
        text: `${item.name} ($${item.price.toFixed(2)} each)`,
        value: item.amount,
        onValueChange: value => {
            const { items } = state
            items[2].amount = value
            state.items = items
        },
    }
}
