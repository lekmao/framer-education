import { Override, Data } from "framer"
import * as React from "react"

// Navigation ----------------

const navState = Data({
    currentPage: 0,
})

// Change the navigation's current page
function setCurrentPage(index) {
    if (navState.currentPage !== index) {
        navState.currentPage = index
    }
}

export function NavigationHeader(): Override {
    const pageHeaders = [
        {
            title: "Songs",
            leftIcon: null,
            leftLink: null,
            onLeftTap: () => {},
        },
        {
            title: "Liked Songs",
            leftLink: "Back",
            leftIcon: "chevron-left",
            onLeftTap: () => (navState.currentPage = 0),
        },
    ]

    return {
        ...pageHeaders[navState.currentPage],
    }
}

export function Page(): Override {
    return {
        currentPage: navState.currentPage,
        onChangePage: index => setCurrentPage(index),
    }
}

export function TabBar(): Override {
    return {
        currentTab: navState.currentPage,
        onChangeTab: index => setCurrentPage(index),
    }
}

// Songs ----------------

const songsState = Data({
    liked: new Set(),
})

function toggleLiked(song) {
    const { liked } = songsState

    if (liked.has(song)) {
        // If already in list, remove the song
        liked.delete(song)
    } else {
        // Otherwise add the song to the list
        liked.add(song)
    }

    // Update the state
    songsState.liked = liked
}

export function Song(props): Override {
    const { liked } = songsState
    const { id, text, message } = props.children[0].props

    // Turn the row item's props into a "song" object
    const song = React.useMemo(
        () => ({
            id,
            track: text,
            artist: message,
        }),
        []
    )

    return {
        value: liked.has(song),
        onValueChange: value => toggleLiked(song),
    }
}

export function LikedList(): Override {
    const { liked } = songsState

    return {
        // Turn the "song" objects back into row items
        items: [...liked].map(song => {
            const { id, track, artist } = song

            return {
                key: id, // Important!
                text: track,
                message: artist,
                component: "favorite",
                value: true,
                onValueChange: () => toggleLiked(song),
            }
        }),
    }
}
