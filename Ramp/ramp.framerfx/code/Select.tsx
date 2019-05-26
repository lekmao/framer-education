import * as React from "react"
import {
    Frame,
    PropertyControls,
    ControlType,
    addPropertyControls,
} from "framer"
import ReactSelect from "react-select"
// import makeAnimated from "react-select/lib/animated"

export const Select = props => {
    let computed = { ...props }

    if (props.cOptions) {
        computed.options = props.cOptions.map(option => {
            return {
                value: option,
                label: option,
            }
        })
        computed.defaultValue =
            computed.options.find(o => o.value == props.cDefaultValue) || null

        computed.value =
            typeof props.cValue === "string"
                ? computed.options.find(o => o.value == props.cValue)
                : props.cValue
    }

    return (
        <Frame size="100%" background="none" center>
            <ReactSelect {...computed} />
        </Frame>
    )
}

Select.defaultProps = {
    height: 40,
    width: 200,
    cOptions: ["London", "Paris", "Hong Kong", "New York"],
    cInitial: "London",
    isMulti: false,
    isClearable: true,
    styles: undefined,
}

addPropertyControls(Select, {
    cOptions: {
        title: "Options",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["London", "Paris", "Hong Kong", "New York"],
    },
    cDefaultValue: {
        title: "Default",
        type: ControlType.String,
        defaultValue: "London",
    },
    isMulti: {
        title: "Multi",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isClearable: {
        title: "Clearable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isDisabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isSearchable: {
        title: "Searchable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
