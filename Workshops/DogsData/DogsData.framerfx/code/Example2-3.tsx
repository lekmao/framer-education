import { Override, Data } from "framer"
import { fetchData } from "./Shared"
// @ts-ignore
import { breedNames } from "./local-data.json"

const appState = Data({
    listItems: breedNames as string[],
})

const fetchDogBreeds = async () => {
    const data = await fetchData("https://dog.ceo/api/breeds/list/all")
    const breedNames = Object.keys(data.message).map(
        name => name[0].toUpperCase() + name.slice(1)
    )

    // const breedJSON = JSON.stringify(breedNames)
    // console.log(breedJSON)

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

// fetchDogBreeds()
