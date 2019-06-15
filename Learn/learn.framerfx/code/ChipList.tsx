import * as React from "react"
import {
    Stack,
    Frame,
    Color,
    addPropertyControls,
    ControlType,
    FrameProps,
} from "framer"
import { pull } from "./Utils"
import { Chip } from "./Chip"
import { colors } from "./canvas"

type ChipItem = {
    text: string
    type?: string
    clearable?: boolean
    onTap?: () => void
}

// Define a type for our props
type Props = FrameProps & {
    chips: Array<string | ChipItem>
    type: string
    clearable: boolean
    onTapChip: (item: ChipItem) => void
    onValueChange: (items: ChipItem[]) => void
}

export function ChipList(props: Partial<Props>) {
    const {
        id,
        chips,
        type,
        clearable,
        onTapChip,
        onValueChange,
        ...rest
    } = props

    const { width, height } = props

    const items: ChipItem[] = chips.map((v, i) =>
        typeof v === "string"
            ? {
                  text: v as string,
                  type,
                  clearable,
                  onTap: () => handleTapChip(i),
              }
            : {
                  text: v.text,
                  type,
                  clearable,
                  onTap: () => handleTapChip(i),
                  ...v,
              }
    )

    /* ---------------------------------- State --------------------------------- */

    // Set initial sizes
    const [state, setState] = React.useState({
        items,
    })

    // Reset sizes (to trigger Text's auto-size)
    React.useEffect(() => {
        setState({
            items,
        })
    }, [chips])

    /* ----------------------------- Event Handlers ----------------------------- */

    // When the user taps the component
    const handleValueChange = () => {
        null
    }

    const handleTapChip = index => {
        props.onTapChip(state.items[index])
    }

    const handleClearChip = value => {
        const nextItems = pull(state.items, value)

        onValueChange(nextItems)

        setState({
            items: nextItems,
        })
    }

    /* ------------------------------ Presentation ------------------------------ */

    return (
        <Stack
            direction="horizontal"
            alignment="center"
            distribution="start"
            background="none"
            width={width}
            height={height}
            {...rest} //
        >
            {state.items.map(item => (
                <Chip
                    key={`${id}_item_${item.text}`}
                    text={item.text}
                    type={item.type}
                    clearable={item.clearable}
                    onTap={item.onTap}
                    onClear={() => handleClearChip(item)}
                />
            ))}
        </Stack>
    )
}

ChipList.defaultProps = {
    height: 40,
    width: 200,
    chips: ["Paris", "London", "New York", "Hong Kong"],
    type: "primary",
    overflow: "hidden" as any,
    clearable: true,
    onTapChip: (item: ChipItem) => null,
    onValueChange: (items: ChipItem[]) => null,
}

addPropertyControls(ChipList, {
    chips: {
        title: "Chips",
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Paris", "London", "New York", "Hong Kong"],
    },
    type: {
        title: "Type",
        type: ControlType.Enum,
        options: ["primary", "secondary", "accent", "warn", "neutral", "ghost"],
        optionTitles: [
            "Primary",
            "Secondary",
            "Accent",
            "Warn",
            "Neutral",
            "Ghost",
        ],
        defaultValue: "primary",
    },
    clearable: {
        title: "Clearable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
