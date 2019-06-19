import { Override, Data } from "framer"
// @ts-ignore
import { colors } from "@framer/steveruizok.education/code"
import { mockData } from "./MockData"

const USE_API = true

// State -------------------------------------------------

let appState = Data({
    company: "AAPL",
    data: mockData,
    loaded: !USE_API,
})

// Data -------------------------------------------------

const fetchCompanyData = async (name: string) => {
    const companies = {
        Apple: "AAPL",
        Google: "GOOGL",
        Facebook: "FB",
        SnapChat: "SNAP",
        Twitter: "TWTR",
    }

    // Hit API
    const response = await fetch(
        `https://financialmodelingprep.com/api/v3/company/profile/${
            companies[name]
        }`
    )
    const json = await response.json()

    // Update state
    appState.loaded = true
    appState.data = json
}

// Set USE_API to false to prevent hitting this api too many times
if (USE_API) {
    fetchCompanyData("AAPL")
}

// Overrides --------------------------------------------

export function TabBar(): Override {
    return {
        onChangeTab: (index: number, tab: string) => {
            fetchCompanyData(tab)
        },
    }
}

export function Symbol(): Override {
    const { symbol } = appState.data
    return {
        text: symbol,
    }
}

export function Change(): Override {
    const { changesPercentage } = appState.data.profile
    return {
        text: changesPercentage,
        color: changesPercentage.includes("-") ? colors.Warn : colors.Secondary,
    }
}

export function Price(): Override {
    const { price } = appState.data.profile
    return {
        text: "$" + price,
    }
}

export function Image(): Override {
    const { image } = appState.data.profile
    return {
        image: image,
    }
}

export function Card(): Override {
    const { companyName, description } = appState.data.profile
    return {
        title: companyName,
        body: description,
    }
}

export function Exchange(): Override {
    const { exchange } = appState.data.profile
    return {
        color: colors.Darker,
        component: "text",
        value: exchange,
    }
}

export function Industry(): Override {
    const { industry } = appState.data.profile
    return {
        color: colors.Darker,
        component: "text",
        value: industry,
    }
}

export function Website(): Override {
    const { website } = appState.data.profile
    return {
        color: colors.Darker,
        component: "text",
        value: website,
    }
}
