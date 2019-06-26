# Part 1: Let’s make a list

## 1.0 Setting Up

* Store

  * Install Learn Design System

* Canvas

  * Create a template
    * Detatch from master
    * Remove Stack
  * Create an ItemList



## 1.1 ItemList

Show how `ItemList` works

* Create ItemList override

  * Start with an `items: []`
  * Open preview
  * Add an item `{ text: "Hello”}`
  * Put some items in the array `[{ text: "Item A"}, { text: "Item B"}, { text: "ItemC"}]`

```tsx
import { Override } from "framer"

export function ItemList(): Override {
    return {
        items: [
            {
                text: "Item A",
            },
            {
                text: "Item B",
            },
            {
                text: "Item C",
            },
        ],
    }
}

```

## 1.2 Mapping data

Show how we turn data into props

* Create an array `[]`
* Put some strings in the array `["Item A", "Item B", "ItemC"]`

* Map over this array to create items

```tsx
  import { Override } from "framer"
  
  const rowItems = ["Item A", "Item B", "Item C"]
  
  export function ItemList(): Override {
      return {
          items: rowItems.map((item, index) => {
              return {
                  text: item,
              }
          }),
      }
  }
```

​    

## 1.3 Modifying data

Aka “data state”.

* Add Data object to imports
* Create an `appState` 
* Move  `rowItems` into state.
* Point the `items` prop to `appState.rowItems`
* Create an `onTap` event and `handleTap` handler.
  * On tap, remove the item at the tapped index.



```tsx
import { Override, Data } from "framer"

const appState = Data({
    rowItems: ["Item A", "Item B", "Item C"],
})

export function ItemList(): Override {
    const handleTap = index => {
        const { rowItems } = appState
        rowItems.splice(index, 1)
        appState.rowItems = rowItems
    }

    return {
        items: appState.rowItems.map((item, index) => {
            return {
                text: item,
                component: "icon",
                icon: "close",
                onTap: () => handleTap(index),
            }
        }),
    }
```



# Part 2: Let’s get some Live data

* Introduce the `dogs.ceo` website.

  * We’re going to ask for a list of dog breeds.
* When the data comes back, we’ll get the list from the data.
  * And we’ll put it in our `state.listItems`.

    

## 2.0 FetchData

* This is going to be a shared function.
  * Create a new file, `Shared.tsx`
  * Create a `fetchData` function.

```tsx
export const fetchData = async url => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}
```

* Export it



## 2.1. fetchDogBreeds


* Create a `fetchDogBreeds` function.
* To begin, just log the data.
* Then turn it into strings.
* And add it to state.
* (We’ll also have to set `appState.listItems` to `as string[]`)

```tsx
const fetchDogBreeds = async () => {
    const data = await fetchData("https://dog.ceo/api/breeds/list/all")
    const breedNames = Object.keys(data.message)
    appState.listItems = breedNames
}
```



## 2.2 Cleanup fetchDogBreeds

* Do some data manipulation. 
  * Capitalize the first letter of the  dog breed.
  * Remove our `handleTap` and `onTap`.
  * Change the icon to `“chevron-right”`

```tsx
const fetchDogBreeds = async () => {
    const data = await fetchData("https://dog.ceo/api/breeds/list/all")
    const breedNames = Object.keys(data.message).map(
        name => name[0].toUpperCase() + name.slice(1)
    )
    appState.listItems = breedNames
}
```



## 2.3 Cache our data

Too many data requests can be bad.

* Introduce JSON

  * Create a JSON file `“local-data.json”`.
  * Add array `breedNames` 
  * Add one or two example names.

```tsx
  {
      "breedNames": [
          "Poodle"
      ]
  }
```

  

* Back in the component...

  * Import this data
  * Add `// @ts-ignore`
* Add this to the `appState.listItems` initial value.
  
```tsx
 import { Override, Data } from "framer"
  // @ts-ignore
  import { breedNames } from "./local-data.json"
```

```tsx
  const appState = Data({
      listItems: breedNames as string[],
  })
```

  * Comment out `fetchDogBreeds()` to show it working.

* Stringify our data that returns from the server

```tsx
const fetchDogBreeds = async () => {
    const data = await fetchData("https://dog.ceo/api/breeds/list/all")
    const breedNames = Object.keys(data.message).map(
        name => name[0].toUpperCase() + name.slice(1)
    )
    
    const breedJSON = JSON.stringify(breedNames)
    console.log(breedJSON)

    appState.listItems = breedNames
}
```

  * Copy it to the clipboard
  * Log it to the console
  * Return to the JSON file
  * Paste over the `breedNames` array



# Part 3 Dig Deeper

## 3.1 Page Navigation

* Create a Page navigation
  * Layout
    * Right click item list, add Frame
    * Move item list off to the side
    * Duplicate it
    * Delete the duplicated `ItemList`
    * Replace it with a `CardList`
    * Set Frame background color
    * Add Page where List used to be
    * Connect to both Frames (list and new Frame)
  * State
    * Add `currentPage` to `appState`
  * Page override
    * Add an override for the `Page` component
    * Apply on canvas
  * Back button
    * on second screen, add a `Link`
    * Move the `CardList` down to fit
    * Create an override that sets an `appState.currentPage`



```tsx
export function PageNavigation(): Override {
    return {
        currentPage: appState.currentPage,
        onChangePage: (next) => {
            if (appState.currentPage !== next) {
                appState.currentPage = next
            }
        }
    }
}
```



```tsx
export function BackButton(): Override {
    return {
        onTap: () => (appState.currentPage = 0),
    }
}
```



* Add `handleTap` and `onTap` event to each item

```tsx
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
```



## 3.2 Add second call

* We’re going to make a second data request for “detailed” data on each breed.
* Bring back `fetchData`.
* Create `fetchBreedInfo`



```tsx
const fetchBreedInfo = async breedName => {
    const info = await fetchData(
        `https://dog.ceo/api/breed/${breedName.toLowerCase()}/images`
    )

    appState.selectedName = breedName
    appState.selectedImages = info.message
}
```

* Create override for Screen 2 (`CardList`)

```tsx
export function CardList(): Override {
    return {
        cards: appState.selectedImages.map((item, index) => {
            return {
                image: item,
            }
        }),
    }
}
	
```



## 3.3 Optimization

* Add `React.useMemo` around different things.
* Slice `selectedImages` to limit number of images fetched