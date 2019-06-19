import * as React from "react"

export const createStore = state => {
    let subscriptions = []

    const store = {
        setState: updater => {
            state = typeof updater === "function" ? updater(state) : updater
            subscriptions.forEach(sub => sub(state))
        },
        getState() {
            return state
        },
        subscribe(updater) {
            subscriptions.push(updater)
        },
        unsubscribe(updater) {
            subscriptions = subscriptions.filter(sub => sub !== updater)
        },
    }

    return () => {
        const [state, setState] = React.useState(store.getState())

        React.useEffect(() => {
            store.subscribe(setState)

            return () => store.unsubscribe(setState)
        }, [])

        return [state, store.setState]
    }
}
