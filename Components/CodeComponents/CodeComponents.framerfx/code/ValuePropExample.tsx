import * as React from "react"
import { Frame, FrameProps } from "framer"

type Props = Partial<FrameProps> & {
    value: number
    onValueChange: (value: number) => void
}

export function ValuePropExample(props: Props) {
    const { value, onValueChange, ...rest } = props

    // Set initial state using props.value
    const [state, setState] = React.useState({
        value,
    })

    // Update state when props.value changes
    React.useEffect(() => {
        setState({ value })
    }, [value])

    const handleTap = () => {
        const next = state.value + 1
        onValueChange && onValueChange(next)
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

// Add default prop for value
ValuePropExample.defaultProps = {
    value: 0,
}
