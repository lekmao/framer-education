import * as React from "react"
import { Override, Data } from "framer"
// @ts-ignore
import * as contentful from "contentful"
import { appState } from "./App"

const SPACE_ID = "meswj2oqtioh"
const ACCESS_TOKEN = "6p31my5V_Qbz0yWxQEI7qD0_5WKqn5ScxkxQXY7bsxM"

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
})

function displayEntries(contentTypes) {
    const itemEntries = []

    return Promise.all(
        appState.contentTypes.map(contentType => {
            return fetchEntriesForContentType(contentType).then(entries => {
                if (!entries) {
                    return
                }

                entries.forEach(entry => {
                    itemEntries.push({
                        id: entry.sys.id,
                        fields:
                            entry.fields[contentType.displayField] || "[empty]",
                    })
                })
            })
        })
    )
}

// Load all Content Types in your space from Contentful
function fetchContentTypes() {
    return client
        .getContentTypes()
        .then(response => response.items)
        .catch(error => {
            console.error(error)
        })
}

// Load all entries for a given Content Type from Contentful
function fetchEntriesForContentType(contentType) {
    return client
        .getEntries({
            content_type: contentType.sys.id,
        })
        .then(response => response.items)
        .catch(error => {
            console.error(error)
        })
}

export const connectToContentful = async () => {
    console.log("getting data")
    const contentTypes = await fetchContentTypes()
    const entries = await fetchEntriesForContentType(contentTypes[0])
    if (entries) {
        console.log("entries", entries)
        appState.blogPosts = entries
    }
}
