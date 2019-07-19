import { Override, Data } from "framer"
import * as React from "react"

// Navigation ----------------

const navState = Data({
    currentPage: 0,
    pageHeaders: [
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
    ],
})

// Functions ---

// Change the navigation's current page
export function setCurrentPage(index) {
    const { currentPage } = navState

    if (currentPage !== index) {
        navState.currentPage = index
    }
}

// Set or update the navigation header props for a given page
export function setPageHeader(page: number, props = {}) {
    const { pageHeaders } = navState

    pageHeaders[page] = { ...pageHeaders[page], ...props }

    navState.pageHeaders = pageHeaders
}

// Overrides ---

export function NavigationHeader(): Override {
    const { pageHeaders, currentPage } = navState
    console.log(pageHeaders)

    return {
        ...pageHeaders[currentPage],
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
