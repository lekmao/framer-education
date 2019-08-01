import * as React from "react"
import { Frame, FrameProps } from "framer"

type Props = Partial<FrameProps> & {
    onValueChange: (value: number) => void
}

export function EventPropExample(props: Props) {
    const { onValueChange, ...rest } = props

    const [state, setState] = React.useState({
        value: 0,
    })

    const handleTap = () => {
        // Calculate the next value
        const next = state.value + 1

        // Share that value with the onValueChange event
        onValueChange && onValueChange(next)

        // Then update state
        setState({
            value: next,
        })
    }

    return (
        <Frame {...rest} onTap={handleTap}>
            {state.value}
        </Frame>
    )
}
