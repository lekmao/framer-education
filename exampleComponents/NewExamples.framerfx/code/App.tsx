import { Override, Data } from "framer"

// Override Docs: https://framer.com/docs/overrides

const data = Data({
    name: "",
    nameValid: false,
    email: "",
    emailValid: false,
    age: 28,
    ageValid: true,
    password1: "",
    password2: "",
    passwordValid: false,
    continent: "South America",
    continentValid: true,
    favoriteColor: "Green",
    favoriteColorValid: true,
    contact: false,
    contactValid: true,
    items: 0,
    itemsValid: false,
})

export function Name(): Override {
    return {
        value: data.name,
        validation: value => value.length > 3,
        onValueChange: (value, valid) => {
            data.name = value
            data.nameValid = valid
        },
    }
}

export function Email(): Override {
    return {
        value: data.email,
        validation: value => value.includes(".com"),
        onValueChange: (value, valid) => {
            data.email = value
            data.emailValid = valid
        },
    }
}

export function Password1(): Override {
    return {
        value: data.password1,
        validation: value => value.length > 5 && value === data.password2,
        onValueChange: (value, valid) => {
            data.password1 = value
            data.passwordValid = valid
        },
    }
}

export function Password2(): Override {
    return {
        value: data.password2,
        validation: value => value.length > 5 && value === data.password1,
        onValueChange: (value, valid) => {
            data.password2 = value
            data.passwordValid = valid
        },
    }
}
export function Age(): Override {
    return {
        value: data.age,
        validation: value => value > 18,
        onValueChange: (value, normal, valid) => {
            data.age = value
            data.ageValid = valid
        },
    }
}

export function Continent(): Override {
    return {
        value: data.continent,
        validation: value => value !== "Antarctica",
        onValueChange: (value, selectedIndex, valid) => {
            data.continent = value
            data.continentValid = valid
        },
    }
}

export function Color(): Override {
    return {
        value: data.favoriteColor,
        validation: value => value !== "None",
        onValueChange: (value, selectedIndex, valid) => {
            data.favoriteColor = value
            data.favoriteColorValid = valid
        },
    }
}

export function Contact(): Override {
    return {
        value: data.contact,
        validation: value => true, // gdpr yo
        onValueChange: (value, valid) => {
            data.contact = value
            data.contactValid = valid
        },
    }
}

export function Items(): Override {
    return {
        value: data.items,
        validation: value => value > 0, // gdpr yo
        onValueChange: (value, valid) => {
            data.items = value
            data.itemsValid = valid
        },
    }
}

export function ContinueButton(): Override {
    const isReady =
        data.nameValid &&
        data.emailValid &&
        data.passwordValid &&
        data.ageValid &&
        data.continentValid &&
        data.favoriteColorValid &&
        data.contactValid &&
        data.itemsValid

    console.table({
        name: data.nameValid,
        email: data.emailValid,
        password: data.passwordValid,
        age: data.ageValid,
        continent: data.continentValid,
        color: data.favoriteColorValid,
        contact: data.contactValid,
        items: data.itemsValid,
    })

    return {
        disabled: !isReady,
    }
}
