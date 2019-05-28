import * as React from "react"
import { Frame, Scroll, Stack } from "framer"
import { colors } from "./canvas"
import { Link } from "./Link"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function ScrollingTabs(props) {
    const { selectedIndex, options, height, width } = props

    const [state, setState] = React.useState({
        index: selectedIndex,
        links: [],
    })

    React.useEffect(() => {
        setState({
            ...state,
            index: selectedIndex,
        })
    }, [selectedIndex])

    return (
        <div style={{ width, height }}>
            <Scroll
                direction="horizontal"
                width={"100%"}
                height={"100%"}
                contentWidth={800}
            >
                <div
                    style={{
                        display: "grid",
                        gridAutoColumns: "fit-content",
                        gridAutoFlow: "column",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "auto",
                        gridGap: 16,
                    }}
                >
                    {options.map(option => (
                        <div
                            style={{
                                fontFamily: "Helvetica Neue",
                                fontSize: 16,
                                fontWeight: "bold",
                                color: colors.Dark,
                                width: "fit-content",
                            }}
                        >
                            {option}
                        </div>
                    ))}{" "}
                </div>
            </Scroll>
        </div>
    )
}

ScrollingTabs.defaultProps = {
    height: 60,
    width: 375,
    options: [
        "means that",
        "different browsers can",
        "give",
        "a different result",
    ],
}
