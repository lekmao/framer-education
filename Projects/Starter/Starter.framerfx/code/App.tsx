import * as React from "react"
import { Override } from "framer"
import { setCurrentPage, setPageHeader } from "./Nav"

export function Page1Button(): Override {
    return {
        onTap: () => {
            setCurrentPage(1)
        },
    }
}

export function Page2AButton(): Override {
    return {
        onTap: () => {
            setPageHeader(2, {
                title: "Leaf A",
            })
            setCurrentPage(2)
        },
    }
}

export function Page2BButton(): Override {
    return {
        onTap: () => {
            setPageHeader(2, {
                title: "Leaf B",
            })
            setCurrentPage(2)
        },
    }
}
