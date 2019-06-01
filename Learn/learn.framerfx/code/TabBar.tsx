import * as React from "react"
import {
    Frame,
    Stack,
    FrameProps,
    addPropertyControls,
    ControlType,
} from "framer"
import { colors } from "./canvas"
import { Icon } from "./Icon"
import { Text } from "./Text"
import { Interactive } from "./Interactive"

type Tab = {
    icon: string
    text: string
}

interface Props extends FrameProps {
    id: string
    width: any
    height: any
    currentTab: string
    onChangeTab: (tab: string, index: number) => void
    tabs: Tab[]
    showLabels: boolean
}

export function TabBar(props: Partial<Props>) {
    const {
        id,
        width,
        height,
        currentTab,
        tabs,
        onChangeTab,
        showLabels,
    } = props

    const [state, setState] = React.useState({
        currentTab,
    })

    const handleTap = (text, index) => {
        if (text === state.currentTab) {
            return
        }

        onChangeTab(text, index)

        setState({
            currentTab: text,
        })
    }

    // Presentation

    const tabObjects: Tab[] = tabs.map(t => {
        if (typeof t === "string") {
            return {
                icon: (t as any).toLowerCase(),
                text: t,
            }
        } else {
            return t
        }
    })

    return (
        <Stack
            direction="horizontal"
            height={height}
            width={width}
            distribution="space-around"
            alignment="start"
            style={{
                borderTop: `1px solid ${colors.Border}`,
            }}
            background={colors.Bg}
        >
            {tabObjects.map((tabObject, index) => {
                const color = state.currentTab
                    ? state.currentTab === tabObject.text
                        ? colors.Primary
                        : colors.Dark
                    : colors.Primary
                return (
                    <Interactive
                        width={48}
                        height={49}
                        onTap={() => handleTap(tabObject.text, index)}
                    >
                        {current => (
                            <Stack
                                width="100%"
                                height="100%"
                                key={`${id}_tab_${tabObject.icon}_${index}`}
                                distribution="center"
                                alignment="center"
                                gap={-2}
                                paddingTop={2}
                            >
                                <Icon
                                    icon={tabObject.icon}
                                    color={color}
                                    size={32}
                                />
                                {showLabels && (
                                    <Text
                                        type="caption"
                                        color={color}
                                        height={12}
                                        width={56}
                                        align="center"
                                        textAlign="center"
                                        resize
                                        text={tabObject.text}
                                    />
                                )}
                            </Stack>
                        )}
                    </Interactive>
                )
            })}
        </Stack>
    )
}

TabBar.defaultProps = {
    id: "tabs",
    height: 84,
    width: 320,
    currentTab: "Home",
    onChangeTab: (currentTab: string, index) => null,
    showLabels: false,
    tabs: [
        {
            icon: "home",
            text: "Home",
        },
        {
            icon: "camera",
            text: "Camera",
        },
        {
            icon: "settings",
            text: "Settings",
        },
    ],
}

addPropertyControls(TabBar, {
    currentTab: {
        title: "CurrentTab",
        type: ControlType.String,
        defaultValue: "Home",
    },
    tabs: {
        title: "Tabs",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Home", "Camera", "Settings"],
    },
    showLabels: {
        title: "Labels",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
