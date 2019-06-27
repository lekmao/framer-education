import { Override, Data } from "framer"
import { fetchData } from "./Shared"

const appState = Data({
    listItems: [] as string[],
})

const fetchDogBreeds = async () => {
    const data = await fetchData("https://dog.ceo/api/breeds/list/all")
    const breedNames = Object.keys(data.message).map(
        name => name[0].toUpperCase() + name.slice(1)
    )
    appState.listItems = breedNames
}

export function ItemList(): Override {
    return {
        items: appState.listItems.map((item, index) => {
            return {
                text: item,
                component: "icon",
                icon: "chevron-right",
            }
        }),
    }
}

fetchDogBreeds()
