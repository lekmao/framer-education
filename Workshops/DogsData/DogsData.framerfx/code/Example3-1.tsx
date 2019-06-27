import { Override, Data } from "framer"
// @ts-ignore
import { breedNames } from "./local-data.json"

const appState = Data({
    currentPage: 0,
    listItems: breedNames,
})

export function PageNavigation(): Override {
    return {
        currentPage: appState.currentPage,
        onChangePage: next => {
            if (appState.currentPage !== next) {
                appState.currentPage = next
            }
        },
    }
}

export function BackButton(): Override {
    return {
        onTap: () => (appState.currentPage = 0),
    }
}

export function ItemList(): Override {
    const handleTap = item => {
        appState.currentPage = 1
    }

    return {
        items: appState.listItems.map((item, index) => {
            return {
                text: item,
                component: "icon",
                icon: "chevron-right",
                onTap: () => handleTap(item),
            }
        }),
    }
}
