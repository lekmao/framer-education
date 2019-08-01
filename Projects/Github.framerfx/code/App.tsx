import * as React from "react"
import { Override, Data } from "framer"
import * as nanogist from "nanogist"
import { GistClient } from "./GistClient"
import { default as Authenticator } from "netlify-auth-providers"
// @ts-ignore
import { Text, Card, Divider } from "@framer/steveruizok.education/code"

// @ts-ignore
import { data as MOCK_DATA } from "./MockData.json"

let gistClient
let authToken

// state

const appState = Data({
    gist: null,
    gists: [],
    currentPage: 0,
    pageTitle: "Posts",
    backAction: null as any,
})

// Events

const authenticate = async () => {
    if (navigator.userAgent.includes("FramerX")) {
        console.log("skipping auth")
        skipAuth()
        return
    }

    const authenticator = new Authenticator({}).authenticate(
        { provider: "github", scope: "user" },
        async (err, data) => {
            authToken = data.token
            gistClient = GistClient(authToken)
            const gists = await gistClient.all()
            loadGists(gists)
        }
    )
}

const skipAuth = async () => {
    gistClient = GistClient(undefined)
    const gists = await gistClient.all()
    loadGists(gists)
}

const loadGists = async data => {
    appState.gists = data
    appState.currentPage = 1

    if (data[0]) {
        appState.pageTitle = "All Gists"
    }
}

const loadGist = async gistInfo => {
    const gist = await gistClient.get(gistInfo.id)

    if (!gist) {
        return
    }

    appState.gist = gist
    appState.currentPage = 2
    appState.pageTitle = "Gist for " + gist.owner.login
    appState.backAction = () => {
        appState.pageTitle = "All gists"
        appState.currentPage = 1
        appState.backAction = null
    }
}

// authenticate

export const AuthenticateButton: Override = () => {
    return {
        onTap: authenticate,
    }
}

export const SkipAuthButton: Override = () => {
    return {
        onTap: skipAuth,
    }
}

// Overrides

export function UsingExampleFlag(): Override {
    return {
        y: navigator.userAgent.includes("FramerX") ? 0 : 1000,
    }
}

// Top navigation for current tab / back
export function Header(): Override {
    return {
        title: appState.pageTitle,
        leftLink: appState.backAction ? "Back" : "",
        leftIcon: appState.backAction ? "chevron-left" : "none",
        onLeftTap: () => appState.backAction && appState.backAction(),
    }
}

export function NavigationPage(): Override {
    return {
        currentPage: appState.currentPage,
    }
}

export const Gists: Override = () => {
    return {
        items: appState.gists.map(gist => {
            return {
                text: gist.files[Object.keys(gist.files)[0]].filename,
                message:
                    gist.description && gist.description.length > 24
                        ? gist.description.slice(0, 24) + "..."
                        : gist.description,
                component: "icon",
                onTap: () => loadGist(gist),
            }
        }),
    }
}

export const Gist: Override = () => {
    const { gist } = appState

    console.log(gist)

    if (!gist) {
        return {}
    }

    const createdDate = new Date(gist.created_at).toLocaleDateString(
        "en-gb",
        {}
    )
    const updatedDate = new Date(gist.updated_at).toLocaleDateString(
        "en-gb",
        {}
    )

    const files = Object.keys(gist.files).map(key => gist.files[key])

    const cards = files.reduce((acc, file) => {
        return [
            ...acc,
            <Text
                width="1fr"
                type="h1"
                textAlign="left"
                verticalAlign="top"
                resize="height"
                text={file.filename}
            />,
            <Text
                width="1fr"
                type="body"
                textAlign="left"
                verticalAlign="top"
                text={file.content}
                resize="height"
            />,
            <Divider />,
        ]
    }, [])

    console.log(files.length)

    return {
        content: [...cards],
    }
}

// export const GistTitle: Override = () => {
//     const { gist } = appState

//     if (!gist) {
//         return {}
//     }

//     return {
//         text: gist.description,
//     }
// }

// export const GistDate: Override = () => {
//     const { gist } = appState

//     if (!gist) {
//         return {}
//     }

//     const createdDate = new Date(gist.created_at).toLocaleDateString(
//         "en-gb",
//         {}
//     )
//     const updatedDate = new Date(gist.updated_at).toLocaleDateString(
//         "en-gb",
//         {}
//     )

//     return {
//         text: "Created: " + createdDate + " | Updated: " + updatedDate,
//     }
// }

// export const GistFiles: Override = () => {
//     const { gist } = appState
//     if (!gist) {
//         return {}
//     }

//     const files = Object.keys(gist.files).map(key => gist.files[key])

//     return {
//         cards: files.map(file => ({
//             title: file.filename,
//             body: file.content,
//             height: 480,
//         })),
//     }
// }
