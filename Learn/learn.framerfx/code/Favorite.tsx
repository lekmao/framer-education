import * as React from "react"
import { Frame, addPropertyControls, ControlType, FrameProps } from "framer"
import { Link } from "./Link"
import { colors } from "./canvas"

interface Props extends FrameProps {
    value: boolean
    onValueChange: (value: boolean) => void
}

// A component for the favorite icon
export const Favorite = (props: Partial<Props>) => {
    const { value, onValueChange, ...rest } = props

    const [state, setState] = React.useState({
        value,
    })

    // Update state from props
    React.useEffect(() => {
        setState({
            ...state,
            value,
        })
    }, [value])

    // Toggle the favorite state
    const handleFavorite = event => {
        event.stopPropagation()
        setState({
            value: !state.value,
        })
        onValueChange(!state.value)
    }

    return (
        <Link
            x={-5}
            y={2}
            width={40}
            height={40}
            {...rest}
            icon={state.value ? "favorite" : "favorite_outline"}
            onTap={handleFavorite}
        />
    )
}

Favorite.defaultProps = {
    value: false,
    onValueChange: value => null,
}

addPropertyControls(Favorite, {
    value: {
        title: "Value",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
