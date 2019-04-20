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
    validation: (value: string) => boolean
    onValueChange: (value: string, index: number, valid: boolean) => void
}

/**
 * Select
 * @param props
 */
export function Select(props: Partial<Props>) {
    // Grab the properties we want to use from props
    const {
        id,
        value: initial,
        selectedIndex: initialIndex,
        options,
        disabled,
        height,
        tint,
        accent,
        validation,
        onValueChange,
    } = props

    /* ---------------------------------- State --------------------------------- */

    // Set the initial value
    const initialValue = initial ? initial : options[initialIndex]

    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue || null,
        selectedIndex: options.indexOf(initialValue),
        valid: validation(initialValue || null),
        focused: false,
        hovered: false,
        active: false,
        hoveredIndex: null,
        activeIndex: null,
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
            valid: validation(selectedValue || null),
            focused: false,
        })
    }, [initialIndex, initialValue, options])

    /* ----------------------------- Event Handlers ----------------------------- */

    // Set the focused state when the user clicks in or out
    const setFocus = (focused: boolean) => {
        if (disabled) return
        setState(state => ({
            ...state,
            focused,
            hoveredIndex: null,
            activeIndex: null,
        }))
    }

    // Set the hovered state when the user mouses over or out
    const setHover = (hovered: boolean) => {
        setState(state => ({
            ...state,
            hovered,
            active: hovered ? state.active : false,
            hoveredIndex: hovered ? state.hoveredIndex : null,
            activeIndex: hovered ? state.activeIndex : null,
        }))
    }

    // Set the active state when the user clicks
    const setActive = (active: boolean) => {
        setState(state => ({
            ...state,
            active,
        }))
    }

    // Set the option's hovered state when the user mouses over or out
    const setOptionHover = (index: number) => {
        setState(state => ({
            ...state,
            hoveredIndex: index,
        }))
    }

    // Set the option's active state when the user clicks
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
            valid,
            selectedIndex,
            hoveredIndex: null,
            activeIndex: null,
            hovered: false,
            active: false,
            focused: false,
        })
    }

    /* ------------------------------ Presentation ------------------------------ */

    // Get the properties we want from state
    const {
        value,
        selectedIndex,
        hoveredIndex,
        activeIndex,
        focused,
        hovered,
        active,
        valid,
    } = state

    const tintColor = Color(tint)
    const accentColor = Color(accent)

    // Define a set of variants for our options
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
    }

    // Define a set of variants for our options
    const optionVariants = {
        initial: {
            background: tint,
        },
        hovered: {
            background: Color.brighten(tintColor, 15),
        },
        active: {
            background: Color.brighten(tintColor, 15),
        },
        selected: {
            background: Color.brighten(tintColor, 20),
            color: accent,
        },
    }

    // Decide which variant to show
    const currentVariant = disabled
        ? "initial"
        : focused
        ? "focused"
        : active
        ? "active"
        : hovered
        ? "hovered"
        : "initial"

    // When the select has no value, we want to shift things down by one
    const nullOffset = value ? 0 : 1

    return (
        <Frame
            // Pass in container props when using this component in code
            {...props as any}
            // Constants
            width="100%"
            height={focused ? (options.length + nullOffset) * height : height}
            overflow="hidden"
            borderRadius={4}
            color={accent}
            background={tint}
            opacity={disabled ? 0.3 : 1}
            shadow={valid ? "none" : "0 2px 0px 0px #8855ff"}
            style={{
                fontSize: 14,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                padding: focused ? "0px 0px" : "0px 12px",
                justifyContent: "flex-start",
                border: `2px solid ${tint}`,
            }}
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
            onClick={() => focused || setFocus(true)}
        >
            {focused // if the select is focused, show the options...
                ? options.map((option, index) => {
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
                              key={`${id}_option_${index}`}
                              width="100%"
                              height={height}
                              top={height * (index + nullOffset)}
                              color="#FFFFFF"
                              style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  padding: "0px 12px",
                                  borderTop: index > 0 && `2px solid ${tint}`,
                              }}
                              transition={{
                                  type: "tween",
                                  duration: 0.05,
                              }}
                              // Variants
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
                  }) // otherwise, just show the value
                : state.value}
        </Frame>
    )
}

// Set the component's default properties
Select.defaultProps = {
    value: "Red",
    selectedIndex: 0,
    options: ["Red", "Blue", "Green"],
    height: 50,
    width: 200,
    disabled: false,
    onValueChange: () => null,
    validation: () => true,
}

// Set the component's property controls
addPropertyControls(Select, {
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
