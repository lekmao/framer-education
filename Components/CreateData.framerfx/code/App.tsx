import * as React from "react"
import { Override, Data } from "framer"

const data = Data({
    currentPage: 0,
    min: 0,
    max: Infinity,
})

const changeCurrentPage = change => {
    const { min, max, currentPage } = data
    const next = currentPage + change
    const clamped = Math.max(min, Math.min(max, next))

    data.currentPage = clamped
}

export function Page(props): Override {
    React.useEffect(() => {
        const pageComponent = props.children[0]
        const pageCount = pageComponent.props.children.length

        data.max = pageCount - 1
    }, [])

    const { currentPage } = data

    return {
        currentPage,
        onChangePage: index => {
            if (index !== currentPage) {
                data.currentPage = index
            }
        },
    }
}

export function LeftButton(): Override {
    return {
        onTap: () => changeCurrentPage(-1),
        disabled: data.currentPage === data.min,
    }
}

export function RightButton(): Override {
    return {
        onTap: () => changeCurrentPage(1),
        disabled: data.currentPage === data.max,
    }
}

/*
Notes ____________

*/
