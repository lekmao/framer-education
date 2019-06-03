import * as Icons from "material-icons-bundle"

export const iconNames = Object.keys(Icons)

export const iconTitles = iconNames.map(name =>
    name
        .replace(/(_)/g, " ")
        .replace(/([A-Z])/g, " $1")
        .split(" ")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
)
