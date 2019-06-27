import { Override, Data } from "framer"
import { fetchData } from "./Shared"

const appState = Data({
    listItems: [] as string[],
})

const fetchDogBreeds = async () => {
    const data = await fetchData("https://dog.ceo/api/breeds/list/all")
    const breedNames = Object.keys(data.message)
    appState.listItems = breedNames
}

export function ItemList(): Override {
    const handleTap = index => {
        const { listItems } = appState
        listItems.splice(index, 1)
        appState.listItems = listItems
    }

    return {
        items: appState.listItems.map((item, index) => {
            return {
                text: item,
                component: "icon",
                icon: "close",
                onTap: () => handleTap(index),
            }
        }),
    }
}

fetchDogBreeds()
