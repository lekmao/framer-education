import * as io from "socket.io-client"

let socket

export function connectToSocket(SERVER_URL, CLIENT_ID, RESPONSES) {
    socket = io(SERVER_URL, {
        reconnection: false,
        query: `id=${CLIENT_ID}`,
    })

    function dispatch(type, data = {}) {
        socket.emit("action", {
            type,
            ...data,
        })
    }

    socket.on("connect", () => {
        dispatch("CONNECT", { id: CLIENT_ID })
    })

    socket.on("disconnect", () => {
        dispatch("DISCONNECT", { id: CLIENT_ID })
    })

    socket.on(
        "action",
        ({ type, ...data }) => RESPONSES[type] && RESPONSES[type](data)
    )

    return dispatch
}
