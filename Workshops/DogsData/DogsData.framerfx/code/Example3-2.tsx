import { Override, Data } from "framer"
import { fetchData } from "./Shared"
// @ts-ignore
import { breedNames } from "./local-data.json"

const appState = Data({
    currentPage: 0,
    listItems: breedNames,
    selectedName: undefined as string,
    selectedImages: [] as any[],
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

const fetchBreedInfo = async breedName => {
    const info = await fetchData(
        `https://dog.ceo/api/breed/${breedName.toLowerCase()}/images`
    )

    appState.selectedName = breedName
    appState.selectedImages = info.message
    appState.currentPage = 1
}

export function ItemList(): Override {
    const handleTap = item => {
        appState.selectedImages = []
        fetchBreedInfo(item)
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

export function CardListTitle(): Override {
    return {
        text: appState.selectedName,
    }
}

export function CardList(): Override {
    return {
        cards: appState.selectedImages.map((item, index) => {
            return {
                image: item,
            }
        }),
    }
}
