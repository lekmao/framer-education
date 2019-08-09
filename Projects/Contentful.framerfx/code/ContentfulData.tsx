import * as React from "react"
import { Override, Data } from "framer"
// @ts-ignore
import * as contentful from "contentful"

import { appState } from "./App"
import { SPACE_ID, ACCESS_TOKEN } from "./access"

// Create the contentful client
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
})

// Fetch entries and add them to state
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

// Connect and get entries
export const connectToContentful = async () => {
    const contentTypes = await fetchContentTypes()
    const entries = await fetchEntriesForContentType(contentTypes[0])
    if (entries) {
        appState.blogPosts = entries
    }
}
