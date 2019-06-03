import { Override, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

export function Scale(): Override {
    return {
        scale: 0.5,
    }
}

const state = Data({
    currentTab0: 0,
    currentTab1: 0,
    currentTab2: 0,
})

export function getTabOverride(index: number) {
    console.log(state["currentTab" + index])
    return {
        currentTab: state["currentTab" + index],
        onChangeTab: tab => (state["currentTab" + index] = tab),
    }
}

export function getPageOverride(index: number) {
    console.log("go to page", state["currentTab" + index])
    return {
        currentPage: state["currentTab" + index],
        onChangePage: page => {
            if (state["currentTab" + index] !== page) {
                state["currentTab" + index] = page
            }
        },
    }
}

export function Tab0(): Override {
    return getTabOverride(0)
}

export function Tab1(): Override {
    return getTabOverride(1)
}

export function Tab2(): Override {
    return getTabOverride(2)
}

export function Page0(): Override {
    return getPageOverride(0)
}

export function Page1(): Override {
    return getPageOverride(1)
}

export function Page2(): Override {
    return getPageOverride(2)
}
