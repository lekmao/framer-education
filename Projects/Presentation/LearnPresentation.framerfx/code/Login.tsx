import { Override, Data } from "framer"
import * as React from "react"
import { pageState } from "./RegFlow"

const state = Data({
    emailOk: false,
    passwordOk: false,
})

export function Button(): Override {
    return {
        disabled: !state.emailOk || !state.passwordOk,
    }
}

export function Link(): Override {
    return {
        onTap: () => {
            pageState.currentPage = 1
        },
    }
}

export function Email(): Override {
    const [message, setMessage] = React.useState("")
    return {
        onValueChange: (value, valid) => {
            setMessage(valid ? "" : "Please enter a valid email address.")

            state.emailOk = valid
        },
        message,
        delay: 0.35, // How long to wait before validating
        validation: (value: string) =>
            // Email validation
            // Copied from https://github.com/framer/framer-education/wiki/Inputs#string
            value.length < 3 ||
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
            ),
    }
}

export function Password(): Override {
    const [message, setMessage] = React.useState(
        "Please include at least one number and one uppercase letter."
    )
    return {
        onValueChange: value => {
            state.passwordOk = value.length > 5
        },
        delay: 0.35, // How long to wait before validating
    }
}
