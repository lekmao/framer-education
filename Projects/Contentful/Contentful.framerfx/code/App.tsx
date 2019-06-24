import * as React from "react"
import { Override, Data } from "framer"
import { connectToContentful } from "./ContentfulData"

export const appState = Data({
    contentTypes: [] as any[],
    blogPosts: [] as any[],
    blogPost: {
        fields: {},
    } as any,
    currentPage: 0,
    pageTitle: "Posts",
    backAction: null as any,
})

connectToContentful()

const toStartCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1)
}

// navigation

const showPosts = () => {
    appState.currentPage = 0
    appState.backAction = null
}

const showPost = itemEntry => {
    appState.blogPost = itemEntry
    appState.currentPage = 1
    appState.backAction = showPosts
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

export function BrowsePage(): Override {
    return {
        currentPage: appState.currentPage,
    }
}

export function BlogPostsCardList(): Override {
    const cards = React.useMemo(() => {
        return appState.blogPosts.map(itemEntry => {
            const {
                title,
                slug,
                heroImage,
                description,
                body,
                author,
                publishedDate,
                tags,
            } = itemEntry.fields

            if (!title) return {}

            return {
                title,
                image: "https:" + heroImage.fields.file.url + "?w=400",
                body: description,
                favorite: false,
                footer: tags.map(t => toStartCase(t)).join(", "),
                onTap: item => {
                    showPost(itemEntry)
                },
            }
        })
    }, [appState.blogPosts])

    return {
        cards,
    }
}

// BlogPost
export function BlogPost(): Override {
    const {
        title,
        slug,
        heroImage,
        description,
        body,
        author,
        publishedDate,
        tags,
    } = appState.blogPost.fields

    if (!title) return {}

    return {
        title,
        image: "https:" + heroImage.fields.file.url,
        body: body.slice(0, 400) + "...",
        favorite: false,
        overlay: false,
    }
}
