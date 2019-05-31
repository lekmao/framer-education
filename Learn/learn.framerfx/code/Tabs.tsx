import * as React from "react"
import { Stack, Scroll, Frame, addPropertyControls, ControlType } from "framer"
import { Link } from "./Link"
import { colors } from "./canvas"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Tabs(props) {
    const { id, height, width, options, value, scroll } = props

    const initialSelectedIndex = options.indexOf(value) || 0

    // Set an initial state
    const [state, setState] = React.useState({
        selectedIndex: initialSelectedIndex,
        tabWidths: options.map(a => -1),
    })

    // Update selected index when value changes
    React.useEffect(() => {
        setState({
            ...state,
            selectedIndex: initialSelectedIndex,
        })
    }, [value])

    // When the links resize, update the tabwidths
    const handleResize = (width, height, index) => {
        const { tabWidths } = state
        tabWidths[index] = width

        setState(state => ({
            ...state,
            tabWidths,
        }))
    }

    // When the user taps on a tab, update the state
    const setSelectedIndex = selectedIndex => {
        setState({
            ...state,
            selectedIndex,
        })
    }

    // Calculate the scroll Position
    const contentWidth = state.tabWidths.reduce((a, c) => a + 32 + c, 0)

    const midScreen = width / 2

    const buttonX =
        16 +
        state.tabWidths
            .slice(0, state.selectedIndex)
            .reduce((a, c) => a + 32 + c, 0)

    const buttonMid = state.tabWidths[state.selectedIndex] / 2

    const midX = midScreen - buttonMid
    const maxX = contentWidth - midScreen - buttonMid

    const scrollMin = 0
    const scrollMax = -(contentWidth - width)
    const scrollMid = -(buttonX - midX)

    const offsetX =
        buttonX < midX // Is scroll too far left?
            ? scrollMin // Clamp to left
            : buttonX > maxX // Is scroll too far ight?
            ? scrollMax // Clamp to right
            : scrollMid // Center on button

    // Calculate the indicator position and width
    const indicatorX = buttonX
    const indicatorWidth = state.tabWidths[state.selectedIndex]

    return (
        <Frame background="none" height={height} width={width}>
            <Scroll
                height={60}
                width={width}
                contentWidth={contentWidth}
                direction="horizontal"
                dragEnabled={contentWidth > width}
                scrollAnimate={{
                    x: offsetX,
                }}
            >
                <Frame background="none" width={contentWidth} height={height}>
                    <Stack
                        direction="horizontal"
                        alignment="center"
                        distribution="start"
                        gap={32}
                        paddingLeft={16}
                        height={50}
                        width={options.length * 100}
                    >
                        {options.map((option, index) => (
                            <Link
                                key={`${id}_tab_${index}`}
                                text={option}
                                height={50}
                                resize="width"
                                type={
                                    state.selectedIndex === index
                                        ? "primary"
                                        : "neutral"
                                }
                                onResize={(width, height) =>
                                    handleResize(width, height, index)
                                }
                                onTap={() => {
                                    setSelectedIndex(index)
                                }}
                            />
                        ))}
                    </Stack>
                    <Frame
                        height={8}
                        bottom={0}
                        background={colors.Primary}
                        initial={{
                            x: buttonX,
                            width: indicatorWidth,
                        }}
                        animate={{
                            x: buttonX,
                            width: indicatorWidth,
                        }}
                    />
                </Frame>
            </Scroll>
        </Frame>
    )
}

Tabs.defaultProps = {
    id: "tabs",
    width: 320,
    height: 60,
    value: "Paris",
    options: ["Paris", "New York", "London", "Hong Kong"],
}

// Set the component's property controls
addPropertyControls(Tabs, {
    value: {
        type: ControlType.String,
        defaultValue: "Paris",
        title: "Value",
    },
    options: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Paris", "New York", "London", "Hong Kong"],
        title: "Options",
    },
})
