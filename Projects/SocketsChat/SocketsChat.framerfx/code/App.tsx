import { Override, Data } from "framer"
import * as React from "react"
// @ts-ignore
import { Message } from "@framer/steveruizok.education/code"

import { connectToSocket } from "./client"

const appState = Data({
    title: "Sign in",
    currentPage: 0,
    inputValue: "",
    userName: "",
    connected: false,
    messages: [],
})

let dispatch: any

// If can't connect, visit https://6y5s7.sse.codesandbox.io/ to restart server

// Socket -------------------------------------------------

const SERVER_URL = "https://6y5s7.sse.codesandbox.io/"

// [3]
const RESPONSES = {
    CONNECT: data => {
        if (data.id === appState.userName) {
            console.log("Framer prototype connected.")
            appState.connected = true
        }
    },
    DISCONNECT: data => {
        if (data.id === appState.userName) {
            console.log("Framer prototype disconnected.")
            appState.connected = false
        }
    },
    MESSAGE: data => {
        appState.messages = [data, ...appState.messages]
    },
}

//
// Navigation

export function PageNavigation(): Override {
    return {
        currentPage: appState.currentPage,
        onChangePage: next => {
            if (next !== appState.currentPage) {
                appState.currentPage = next
            }
        },
    }
}

// Header

export function Header(): Override {
    return {
        title: appState.title,
    }
}

// Sign in

export function UserNameInput(): Override {
    return {
        value: appState.userName,
        onValueChange: value => (appState.userName = value),
    }
}

export function UsernameButton(): Override {
    return {
        disabled: appState.userName === "",
        onTap: () => {
            dispatch = connectToSocket(SERVER_URL, appState.userName, RESPONSES)
            Object.assign(appState, { title: "Chat", currentPage: 1 })
        },
    }
}

// Chat

export function Input(): Override {
    return {
        delay: 0,
        value: appState.inputValue,
        onValueChange: value => (appState.inputValue = value),
    }
}

export function InputButton(): Override {
    return {
        disabled: appState.inputValue === "",
        onTap: () => {
            const message = appState.inputValue
            appState.inputValue = ""
            setTimeout(() => {
                dispatch("MESSAGE", {
                    user: appState.userName,
                    body: message,
                    date: new Date().toISOString(),
                })
            }, 120)
        },
    }
}

export function MessagesList(): Override {
    const content = appState.messages.map(({ user, body, date }, index) => (
        <Message
            key={index}
            width="100%"
            userName={user}
            text={body}
            date={date}
            align={user === appState.userName ? "right" : "left"}
            y={16}
        />
    ))

    return {
        content,
    }
}
