import { Override, Data } from "framer"

export const pageState = Data({
    currentPage: 0,
})

export function Pager(): Override {
    return {
        currentPage: pageState.currentPage,
    }
}
