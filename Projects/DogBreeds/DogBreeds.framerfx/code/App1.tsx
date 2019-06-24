import * as React from "react"
import { Override, Data } from "framer"
import { cachedBreeds } from "./CachedData"
// @ts-ignore
import { pull, colors } from "@framer/steveruizok.education/code/"

type Breed = {
    breed: string
    subBreed?: string
    subBreeds?: Breed[]
    images?: string[]
}

const toStartCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1)
}

// app state

export const appState = Data({
    tabTitle: "Browse",
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
    favorites: [] as Breed[],
})

// data

// Whether to load data from API (or use pre-cached data)
const USE_API = false

// Get surface data for all breeds
const fetchBreeds = async () => {
    // Get data from API
    const response = await fetch("https://dog.ceo/api/breeds/list/all")

    // Turn data into JSON
    const data = await response.json()

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
        images: data.message,
    }

    appState.currentPage = 2
    appState.backAction = breed.subBreed ? showSubBreedsList : showBreedsList
}

if (USE_API) {
    fetchBreeds()
} else {
    appState.breeds = cachedBreeds
}

// navigation

const showBreedsList = () => {
    appState.currentPage = 0
    appState.backAction = null
}

const showSubBreedsList = () => {
    appState.currentPage = 1
    appState.backAction = showBreedsList
}

// Top navigation for current tab / back
export function Header(): Override {
    return {
        title: appState.tabTitle,
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
                appState.tabTitle = tab
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
            paddingLeft: 16,
            icon:
                breed.subBreeds.length > 0
                    ? "chevron-double-right"
                    : "chevron-right",
            onTap: item => {
                if (breed.subBreeds.length > 0) {
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
                paddingLeft: 16,
                onTap: item => {
                    fetchBreed(breed)
                },
            }
        })
    }, [appState.subBreeds])

    return {
        items,
    }
}

// Info on the selected breed
export function BreedInfoCard(): Override {
    const { breed, subBreed, images } = appState.breed

    return {
        header: " ",
        title: toStartCase(subBreed ? `${subBreed} ${breed}` : breed),
        image: images[0],
        overlay: false,
        isFavorite: appState.favorites.find(f => f.breed === breed),
        favorite: true,
        onFavoriteChange: isFavorite => {
            if (isFavorite) {
                appState.favorites = [...appState.favorites, appState.breed]
            } else {
                appState.favorites = pull(appState.favorites, appState.breed)
            }
        },
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
                paddingLeft: 16,
                onTap: item => {
                    fetchBreed(breed)
                },
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
        return appState.favorites.map(breed => {
            return {
                title: toStartCase(
                    breed.subBreed
                        ? `${breed.subBreed} ${breed.breed}`
                        : breed.breed
                ),
                header: " ",
                body: null,
                image: breed.images[0],
                overlay: false,
                isFavorite: appState.favorites.find(
                    f => f.breed === breed.breed
                ),
                favorite: true,
                height: 520,
                autosize: true,
                onFavoriteChange: isFavorite => {
                    if (isFavorite) {
                        appState.favorites = [...appState.favorites, breed]
                    } else {
                        appState.favorites = pull(appState.favorites, breed)
                    }
                },
            }
        })
    }, [appState.favorites])

    return {
        cards,
    }
}
