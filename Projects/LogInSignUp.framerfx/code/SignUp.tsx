import { Override, Data } from "framer"
import * as React from "react"
import { pageState } from "./App"

const state = Data({
    emailOk: false,
    passwordOk: false,
    passwordValue: "",
    passwordMatch: false,
    privacyPolicy: false,
})

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
        delay: 0.35, // How long to wait before validating
        message,
        value: state.passwordValue,
        validation: (value: string) =>
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value),

        onValueChange: value => {
            Object.assign(state, {
                passwordOk: value.length > 5,
                passwordValue: value,
            })
        },
    }
}

export function PasswordMatch(): Override {
    const [message, setMessage] = React.useState("")
    return {
        delay: 0.35, // How long to wait before validating
        message,
        validation: (value: string) => value === state.passwordValue,
        onValueChange: (value, valid) => {
            const doesMatch = value.length > 0 && value === state.passwordValue
            state.passwordMatch = doesMatch
            setMessage(doesMatch ? "" : "Passwords must match exactly.")
        },
    }
}

export function PrivacyPolicy(): Override {
    const [message, setMessage] = React.useState("")
    return {
        value: state.privacyPolicy,
        onValueChange: value => {
            state.privacyPolicy = value
        },
    }
}

export function Button(): Override {
    return {
        disabled:
            !state.emailOk ||
            !state.passwordOk ||
            !state.passwordMatch ||
            !state.privacyPolicy,
        onTap: () => (pageState.currentPage = 2),
    }
}
