import * as React from "react"
import { Override } from "framer"
import { setCurrentPage } from "./Nav"

export function Page1Button(): Override {
    return {
        onTap: () => setCurrentPage(1),
    }
}

export function Page2Button(): Override {
    return {
        onTap: () => setCurrentPage(2),
    }
}
