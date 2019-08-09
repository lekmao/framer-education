import * as React from "react"
import { Override, Data } from "framer"
// @ts-ignore
import * as cachedData from "./response.json"
// @ts-ignore
import { pull, colors } from "@framer/steveruizok.education/code/"

// Get new breeds data from the server?
const USE_API = true

// app state

type Breed = {
    breed: string
    subBreed?: string
    subBreeds?: Breed[]
    images?: string[]
}

export const appState = Data({
    currentTitle: "Browse",
    currentTab: 0,
    currentPage: 0,
    backAction: null as any,
    breeds: [] as Breed[],
    subBreeds: [] as Breed[],
    breed: {
        breed: "none",
        subBreeds: [],
        images: [],
    } as Breed,
    query: "",
    favorites: [] as string[],
})

// data

// Get surface data for all breeds
const fetchBreeds = async () => {
    let data = cachedData

    if (USE_API) {
        // Get data from API
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        data = await response.json()
    }

    // Turn JSON object into array
    const breeds = Object.keys(data.message).map(key => {
        return {
            breed: key,
            subBreeds: data.message[key].map(subBreed => ({
                breed: key,
                subBreed: subBreed,
            })),
        }
    })

    // Update state with data
    appState.breeds = breeds
}

fetchBreeds()

// Get deep data on a specific breed
const fetchBreed = async breed => {
    const url = breed.subBreed
        ? `https://dog.ceo/api/breed/${breed.breed}/${breed.subBreed}/images`
        : `https://dog.ceo/api/breed/${breed.breed}/images`

    // Get data from API
    const response = await fetch(url)

    // Turn data into JSON
    const data = await response.json()

    // Update state with data
    appState.breed = {
        ...breed,
        images: data.message.slice(0, 20),
    }

    // Show page 3 (Breed detail)
    appState.currentTitle = toStartCase(breed.breed)
    showBreedDetail(breed.subBreed ? showSubBreedsList : showBreedsList)
}

// navigation

const showBreedsList = () => {
    appState.currentTitle = "Breeds"
    appState.currentPage = 0
    appState.backAction = null
}

const showSubBreedsList = () => {
    appState.currentPage = 1
    appState.backAction = showBreedsList
}

const showBreedDetail = backTarget => {
    appState.currentPage = 2
    appState.backAction = backTarget
}

// Top navigation for current tab / back
export function Header(): Override {
    return {
        title: appState.currentTitle,
        leftLink: appState.backAction ? "Back" : "",
        leftIcon: appState.backAction ? "chevron-left" : "none",
        onLeftTap: () => appState.backAction && appState.backAction(),
    }
}

// Page component for tab navigation
export function TabPage(): Override {
    return {
        currentPage: appState.currentTab,
    }
}

// Tab Bar for tab navigation
export function TabBar(): Override {
    return {
        tabs: [
            {
                icon: "table",
                title: "Browse",
            },
            {
                icon: "magnify",
                title: "Search",
            },
            {
                icon: "heart-outline",
                title: "Favorites",
            },
        ],
        currentTab: appState.currentTab,
        onChangeTab: (index, tab) => {
            if (appState.currentTab !== index) {
                appState.backAction = null
                appState.currentTitle = tab
                appState.currentTab = index
                appState.currentPage = 0
            }
        },
    }
}

// Browse

export function BrowsePage(): Override {
    return {
        currentPage: appState.currentPage,
    }
}

// List of breeds
export function BreedsList(): Override {
    const items = appState.breeds.map(breed => {
        return {
            text: toStartCase(breed.breed),
            component: "icon",
            icon:
                breed.subBreeds.length > 0
                    ? "chevron-double-right"
                    : "chevron-right",
            onTap: item => {
                if (breed.subBreeds.length > 0) {
                    appState.currentTitle = toStartCase(breed.breed)
                    appState.subBreeds = breed.subBreeds
                    showSubBreedsList()
                } else {
                    fetchBreed(breed)
                }
            },
        }
    })

    return {
        items,
    }
}

// List of sub-breeds
export function SubBreedsList(): Override {
    const items = React.useMemo(() => {
        return appState.subBreeds.map(breed => {
            return {
                text: toStartCase(breed.subBreed),
                component: "icon",
                icon: "chevron-right",
                onTap: item => fetchBreed(breed),
            }
        })
    }, [appState.subBreeds])

    return {
        items,
    }
}

// Info on the selected breed
export function BreedImagesList(): Override {
    const { favorites } = appState
    const { breed, subBreed, images } = appState.breed

    return {
        cards: images.slice(0, 20).map(image => {
            return {
                image: image,
                overlay: false,
                isFavorite: favorites.find(img => img === image),
                favorite: true,
                onFavoriteChange: isFavorite => {
                    if (isFavorite) {
                        appState.favorites = [...favorites, image]
                    } else {
                        appState.favorites = pull(favorites, image)
                    }
                },
            }
        }),
    }
}

// Search

export function SearchPage(): Override {
    return {
        currentPage: appState.currentPage,
    }
}

// Text input for search query
export function SearchInput(): Override {
    return {
        value: appState.query,
        onValueChange: value => {
            appState.query = value
        },
    }
}

// List of filtered search results (breeds matching query)
export function SearchResults(): Override {
    const items = React.useMemo(() => {
        const lowerCaseQuery = appState.query.toLowerCase()

        const filtered =
            lowerCaseQuery.length > 2
                ? appState.breeds.filter((breed, index) => {
                      return breed.breed.toLowerCase().match(lowerCaseQuery)
                  })
                : []

        return filtered.map(breed => {
            return {
                text: toStartCase(breed.breed),
                component: "icon",
                icon: "chevron-right",
                onTap: item => fetchBreed(breed),
            }
        })
    }, [appState.query])

    return {
        items,
    }
}

// Favorites

export function FavoritesList(): Override {
    const cards = React.useMemo(() => {
        return appState.favorites.map(image => {
            return {
                image,
                overlay: false,
                isFavorite: appState.favorites.find(img => img === image),
                favorite: true,
                height: 520,
                autosize: true,
                onFavoriteChange: isFavorite => {
                    if (isFavorite) {
                        appState.favorites = [...appState.favorites, image]
                    } else {
                        appState.favorites = pull(appState.favorites, image)
                    }
                },
            }
        })
    }, [appState.favorites])

    return {
        cards,
    }
}

// Helpers

const toStartCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1)
}
