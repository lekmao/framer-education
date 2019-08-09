import { Override, Data } from "framer"
import * as React from "react"

// Navigation ----------------

const appState = Data({
    currentPage: 0,
    totalPages: 3,
})

// Functions ---

// Change the navigation's current page
export function setCurrentPage(index) {
    const { currentPage, totalPages } = appState

    // Guard against certain conditions
    if (index < 0 || index > totalPages - 1 || appState.currentPage === index) {
        return
    }
    appState.currentPage = index
}

// Set this one on the page component
export function Page(props): Override {
    React.useEffect(() => {
        const [page] = props.children
        appState.totalPages = page.props.children.length
    }, [])

    return {
        currentPage: appState.currentPage,
        onChangePage: index => setCurrentPage(index),
    }
}

// Set this one on a "left" button
export function Left(): Override {
    return {
        onTap: () => {
            setCurrentPage(appState.currentPage - 1)
        },
    }
}

// Set this one on a "right" button
export function Right(): Override {
    return {
        onTap: () => setCurrentPage(appState.currentPage + 1),
    }
}
