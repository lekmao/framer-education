import * as React from "react"
import { Frame, Color, addPropertyControls, ControlType } from "framer"

type Props = {
    id: string
    width: number
    height: number
    options: string[]
    value: string
    selectedIndex: number
    disabled: boolean
    tint: string
    accent: string
    onValueChange: (value: string, index: number, valid: boolean) => void
    validation: (value: string) => boolean
}

/**
 * Segment
 * @param props
 */
export function Segment(props: Partial<Props>) {
    // Grab the properties we want to use from props (note that we're
    // renaming the value and selectedIndex, to avoid conflicting with the
    // state's `value` and `selectedIndex` properties.
    const {
        value: initial,
        selectedIndex: initialIndex,
        options,
        width,
        disabled,
        validation,
        onValueChange,
        tint,
        accent,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Set the initial value
    const initialValue = initial ? initial : options[initialIndex]

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue || null,
        selectedIndex: options.indexOf(initialValue),
        hoveredIndex: null,
        activeIndex: null,
        valid: validation(initialValue || null),
        hovered: false,
        active: false,
    })

    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        const selectedValue = initialValue
            ? initialValue
            : options[initialIndex]

        setState({
            ...state,
            value: selectedValue || null,
            selectedIndex: options.indexOf(selectedValue),
            hoveredIndex: null,
            activeIndex: null,
            valid: validation(selectedValue || null),
        })
    }, [initialIndex, initialValue, options])

    /* ----------------------------- Event Handlers ----------------------------- */

    // Set the hovered state when the user mouses in or out
    const setHover = (hovered: boolean) => {
        setState(state => ({
            ...state,
            hovered,
            active: hovered ? state.active : false,
            hoveredIndex: hovered ? state.hoveredIndex : null,
            activeIndex: hovered ? state.activeIndex : null,
        }))
    }

    // Set the active state when the user mouses down or up
    const setActive = (active: boolean) => {
        setState(state => ({
            ...state,
            active,
        }))
    }

    // Set the hovered state of an option when the user mouses in or out
    const setOptionHover = (index: number) => {
        setState(state => ({
            ...state,
            hoveredIndex: index,
        }))
    }

    // Set the active state of an option when the user mouses down or up
    const setOptionActive = (index: number) => {
        setState(state => ({
            ...state,
            activeIndex: index,
        }))
    }

    // When the user selects an option, updatet state and run onValueChange
    const setSelectedIndex = (selectedIndex: number) => {
        if (disabled) return

        const selectedValue = options[selectedIndex]

        const value = selectedValue || null

        const valid = validation(value)

        onValueChange(value, selectedIndex, valid)

        setState({
            ...state,
            value,
            selectedIndex,
            valid,
        })
    }

    /* ------------------------------- Presntation ------------------------------ */

    // Get the properties we want from state
    const {
        value,
        selectedIndex,
        hoveredIndex,
        activeIndex,
        hovered,
        active,
        valid,
    } = state

    const tintColor = Color(tint)
    const accentColor = Color(accent)

    // Define some variants
    const variants = {
        initial: {
            border: `2px solid ${tint}`,
        },
        hovered: {
            border: `2px solid ${Color.brighten(tintColor, 10).toValue()}`,
        },
        active: {
            border: `2px solid ${Color.brighten(tintColor, 15).toValue()}`,
        },
        focused: {
            border: `2px solid ${Color.brighten(tintColor, 20).toValue()}`,
        },
    }

    // Decide which variant to use
    const currentVariant = disabled
        ? "initial"
        : active
        ? "active"
        : hovered
        ? "hovered"
        : "initial"

    // Define a set of variants for our options
    const optionVariants = {
        initial: {
            background: Color.alpha(tintColor, 0),
            color: tintColor,
        },
        hovered: {
            background: Color.alpha(tintColor, 0),
            color: accent,
        },
        active: {
            background: Color.alpha(tintColor, 0.5),
            color: accent,
        },
        selected: {
            background: tintColor,
            color: accent,
        },
    }

    // Calculate a width to use for each segment
    const segmentWidth = (width - (options.length - 1)) / options.length

    return (
        <Frame
            // Pass in container props when using this component in code
            {...props as any}
            // Constants
            size="100%"
            borderRadius={4}
            overflow="hidden"
            background="none"
            opacity={disabled ? 0.3 : 1}
            shadow={valid ? "none" : "0 2px 0px 0px #8855ff"}
            transition={{
                type: "tween",
                duration: 0.16,
            }}
            // Variants
            variants={variants}
            initial={currentVariant}
            animate={currentVariant}
            // Events
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
        >
            {options.map((option, index) => {
                // An option is hovered if its index matches the state's hoveredIndex
                const hovered = index === hoveredIndex

                // An option is active if its index matches the state's activeIndex
                const active = index === activeIndex

                // An option is selected if its index matches the state's selectedIndex
                const selected = index === selectedIndex

                // Decide which variant to show
                const currentVariant = disabled
                    ? selected
                        ? "selected"
                        : "initial"
                    : active
                    ? "active"
                    : selected
                    ? "selected"
                    : hovered
                    ? "hovered"
                    : "initial"

                return (
                    <Frame
                        // Constant props
                        key={`${props.id}_option_${index}`}
                        width={segmentWidth}
                        height={"100%"}
                        left={segmentWidth * index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            fontWeight: 600,
                            borderLeft: index > 0 && `2px solid ${tint}`,
                        }}
                        transition={{
                            type: "tween",
                            duration: 0.16,
                        }}
                        // Variant props
                        variants={optionVariants}
                        initial={currentVariant}
                        animate={currentVariant}
                        // Events
                        onMouseEnter={() => setOptionHover(index)}
                        onMouseDown={() => setOptionActive(index)}
                        onMouseUp={() => setOptionActive(null)}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {option}
                    </Frame>
                )
            })}
        </Frame>
    )
}

// Set the component's default properties
Segment.defaultProps = {
    selectedIndex: 0,
    options: ["Red", "Blue", "Green"],
    height: 50,
    width: 200,
    disabled: false,
    tint: "#027aff",
    textTint: "#FFFFFF",
    onValueChange: () => null,
    validation: () => true,
}

// Set the component's property controls
addPropertyControls(Segment, {
    selectedIndex: {
        type: ControlType.Number,
        step: 1,
        min: -1,
        max: 10,
        displayStepper: true,
        defaultValue: 0,
    },
    options: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Red", "Green", "Blue"],
    },
    disabled: {
        type: ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
    tint: {
        type: ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
})
