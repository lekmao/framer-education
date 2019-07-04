import * as React from "react"
import { Frame, Stack, Page } from "framer"
// @ts-ignore
import { TextInput, Button } from "@framer/steveruizok.education/code"

export function TodoItem(props) {
    const {
        value,
        height,
        width,
        complete,
        onComplete,
        onEdit,
        onFocus,
        onRemove,
        onRestore,
        date,
        readOnly,
    } = props

    const [state, setState] = React.useState({
        value,
        complete,
        editing: false,
        savedValue: value,
    })

    // Update state when `props.value` changes
    React.useEffect(() => {
        setState({
            ...state,
            value,
        })
    }, [props.value])

    // Update state when `props.complete` changes
    React.useEffect(() => {
        setState({
            ...state,
            complete,
        })
    }, [props.complete])

    // When we focus on the input, update state and run `onFocus` event
    const startEditing = value => {
        setState({
            ...state,
            editing: true,
        })

        onFocus(value)
    }

    // When we complete a todo, update `complete`
    const handleComplete = value => {
        setState({
            ...state,
            complete: true,
        })

        onComplete(value)
    }

    // Update state when the input's value changes
    const handleChange = value => {
        setState({
            ...state,
            value,
        })
    }

    // Update state when we confirm an edit
    const handleEdit = () => {
        setState({
            ...state,
            editing: false,
            savedValue: state.value,
            value: state.value,
        })

        onEdit(state.value)
    }

    // When we cancel an edit (by blurring the input),
    // Restore the previous "saved" value
    const cancelEdit = () => {
        setState(state => ({
            ...state,
            value: state.savedValue,
            editing: false,
        }))
    }

    // Options for displaying the item's date
    const dateOptions = {
        weekday: "long",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    }

    return (
        <Stack
            direction="horizontal"
            alignment="start"
            gap={8}
            height={80}
            width={width}
        >
            <TextInput
                width={`calc(100% - 58px)`}
                height={80}
                delay={0}
                value={state.value}
                readOnly={readOnly}
                onValueChange={handleChange}
                onFocus={() => setTimeout(startEditing, 200)}
                onBlur={() => setTimeout(cancelEdit, 200)}
                message={date.toLocaleString("en-gb", dateOptions)}
            />
            <Page
                height={50}
                width={50}
                dragEnabled={false}
                currentPage={
                    complete
                        ? state.editing
                            ? 1
                            : 0
                        : state.value === state.savedValue
                        ? 0
                        : 1
                }
            >
                <Button
                    right={0}
                    height={50}
                    width={50}
                    icon={complete ? "close" : "check"}
                    type="neutral"
                    onTap={complete ? onRemove : handleComplete}
                />
                <Button
                    right={0}
                    height={50}
                    width={50}
                    icon={complete ? "refresh" : "pencil"}
                    type="primary"
                    disabled={!complete && state.value === state.savedValue}
                    onTap={complete ? onRestore : handleEdit}
                />
            </Page>
        </Stack>
    )
}

TodoItem.defaultProps = {
    value: "Clean room",
    height: 50,
    width: 360,
    date: new Date(),
    onComplete: () => null,
    onFocus: () => null,
    onEdit: () => null,
    onRemove: () => null,
    onRestore: () => null,
}
