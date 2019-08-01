import * as React from "react"
import { Override, createData } from "framer"

// [1]
const useData = createData(
    {
        currentPage: 0,
        min: 0,
        max: Infinity,
    },
    {
        setMax: (state, max) => {
            return {
                ...state,
                max,
            }
        },
        setCurrentPage: (state, next) => {
            const { min, max } = state
            const clamped = Math.max(min, Math.min(max, next))

            return {
                ...state,
                currentPage: clamped,
            }
        },
        changeCurrentPage: (state, change) => {
            const { min, max, currentPage } = state
            const next = currentPage + change
            const clamped = Math.max(min, Math.min(max, next))

            return {
                ...state,
                currentPage: clamped,
            }
        },
    }
)

export function Page(props): Override {
    // [2]
    const [data, actions] = useData()

    // [3]
    React.useEffect(() => {
        const pageComponent = props.children[0]
        const pageCount = pageComponent.props.children.length

        actions.setMax(pageCount - 1)
    }, [])

    const { currentPage } = data

    return {
        // [4]
        currentPage,
        // [5]
        onChangePage: index => {
            if (index !== currentPage) {
                actions.setCurrentPage(index)
            }
        },
    }
}

export function LeftButton(): Override {
    const [data, actions] = useData()
    return {
        // [6]
        onTap: () => actions.changeCurrentPage(-1),
        disabled: data.currentPage === data.min,
    }
}

export function RightButton(): Override {
    const [data, actions] = useData()

    return {
        // [7]
        onTap: () => actions.changeCurrentPage(1),
        disabled: data.currentPage === data.max,
    }
}

/*
Notes ____________

[1]
For this exmaple, we'll use the `createData` function to create a state with three properties: 
- `current` - the page component's current page
- `min` - its minimum page index
- `max` - and maximum page index

In the function's second argument, we define a set of "action" functions that we'll use to update the state. These actions will be given two arguments: the current state and the data from the function call. They'll need to return the next state.

The `createData` function returns a React hook: `useData`.

[2]
In our Page component's override, we first use the `useData` hook to get two things:
- the current state of the data 
- the data's actions

[3]
We'll also want to have a side effect on the first (and only on the first) render. When the override first runs, we get the length of page component's children array, and use this number to update our state's max.

[4]
In the returned overrides, we'll set with `data.currentPage`. Whenever the component receives a new value on this prop, it will display its page at that index. We can now "control" the component by changing `data.currentPage`.

[5]
Every time the page changes its current page - either because it's received a new `currentPage` prop OR because a user has swiped between pages - the component will call its `onChangePage` event with the index of its new current page. 

If the change occurred because we changed `data.currentPage`, then the index will be the same as our `data.currentPage` and we shouldn't do anything. If, however, the event is firing because the user just swiped between pages, then the two values will be different and we'll need to update the `data.currentPage` with the component's new current page. 

We do make this update using the `changeCurrentPage` action.

[6]
For our left button, we'll want to call `actions.changeCurrentPage` when the user taps on the button. We'll pass the action an argument `-1`, which the action will get as its second argument. See the actions.changeCurrentPage for how this `-1` is being received and used to update the state.

[7]
For our left button, we'll want to call `actions.changeCurrentPage` when the user taps on the button. We'll pass the action an argument `-1`, which the action will get as its second argument. See the actions.changeCurrentPage for how this `-1` is being received and used to update the state.
- 

[8]
We do the same for the right button. We can use the same `actions.changeCurrentPage` action, just passing it a different number to change the current page.
*/
