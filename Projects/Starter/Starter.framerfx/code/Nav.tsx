import { Override, Data } from "framer"
import * as React from "react"

// Navigation ----------------

const navState = Data({
    currentPage: 0,
})

// Change the navigation's current page
export function setCurrentPage(index) {
    if (navState.currentPage !== index) {
        navState.currentPage = index
    }
}

export function NavigationHeader(): Override {
    const pageHeaders = [
        {
            title: "Page One",
            leftIcon: null,
            leftLink: null,
            onLeftTap: () => {},
        },
        {
            title: "Page Two",
            leftLink: "Back",
            leftIcon: "chevron-left",
            onLeftTap: () => (navState.currentPage = 0),
        },
        {
            title: "Page Three",
            leftLink: "Back",
            leftIcon: "chevron-left",
            onLeftTap: () => (navState.currentPage = 1),
        },
    ]

    return {
        ...pageHeaders[navState.currentPage],
    }
}

export function Page(): Override {
    return {
        currentPage: navState.currentPage,
        onChangePage: index => setCurrentPage(index),
    }
}

export function TabBar(): Override {
    return {
        currentTab: navState.currentPage,
        onChangeTab: index => setCurrentPage(index),
    }
}
