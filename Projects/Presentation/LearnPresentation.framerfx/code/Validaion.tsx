import { Override, Data } from "framer"
import * as React from "react"

// Override Docs: https://framer.com/docs/overrides

export function Slider(): Override {
    return {
        validation: value => value > 50,
    }
}

export function Email(): Override {
    const [message, setMessage] = React.useState(
        "Please enter your e-mail address"
    )
    return {
        onValueChange: (value, valid) => {
            setMessage(
                value.length === 0
                    ? "Please enter your e-mail address"
                    : valid
                    ? "Thanks!"
                    : "Please enter a valid email address."
            )
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
