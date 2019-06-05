import { Override, Data } from "framer"

export const pageState = Data({
    currentPage: 0,
})

export function Pager(): Override {
    return {
        currentPage: pageState.currentPage,
    }
}

export function LogInLink(): Override {
    return {
        onTap: () => {
            pageState.currentPage = 0
        },
    }
}

export function SignUpLink(): Override {
    return {
        onTap: () => {
            pageState.currentPage = 1
        },
    }
}
