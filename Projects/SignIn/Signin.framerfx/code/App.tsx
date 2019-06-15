import { Override, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const state = Data({
    currentPage: 0,
    emailIsValid: false,
    passwordIsValid: false,
})

export function EmailInput(): Override {
    return {
        validation: value =>
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
            ),
        onValueChange: (value, valid) => {
            if (state.emailIsValid !== valid) {
                state.emailIsValid = valid
            }
        },
    }
}

export function PasswordInput(): Override {
    return {
        validation: value => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value),
        onValueChange: (value, valid) => {
            if (state.passwordIsValid !== valid) {
                state.passwordIsValid = valid
            }
        },
    }
}

export function Page(): Override {
    return {
        currentPage: state.currentPage,
    }
}

export function SignInButton(): Override {
    return {
        disabled: !(state.emailIsValid && state.passwordIsValid),
        onTap: () => {
            state.currentPage = 1
        },
    }
}

export function SignOutButton(): Override {
    return {
        onTap: () => {
            state.currentPage = 0
        },
    }
}
