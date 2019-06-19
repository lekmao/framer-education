import * as React from "react"
import { Frame, Stack } from "framer"
import { TodoItem } from "./TodoItem"
import { AllCompleteMessage, NoCompleteMessage } from "./canvas"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function TodoList(props) {
    const {
        todos,
        height,
        width,
        completed,
        onEdit,
        onComplete,
        onRemove,
        onRestore,
    } = props

    // If props.todos is empty, show a complete message.
    const message =
        todos.length === 0 &&
        (completed ? (
            <NoCompleteMessage width="100%" />
        ) : (
            <AllCompleteMessage width="100%" />
        ))

    return (
        <Stack
            direction="vertical"
            alignment="start"
            gap={20}
            padding={16}
            width={width}
            height={height}
        >
            {todos.map(todo => (
                // Return a TodoItem for each of our todo items
                <TodoItem
                    {...todo}
                    readOnly={completed}
                    key={`todo_${todo.id}`}
                    width="1fr"
                    onEdit={value => {
                        onEdit({ ...todo, value })
                    }}
                    onComplete={() => onComplete(todo)}
                    onRemove={() => onRemove(todo)}
                    onRestore={() => onRestore(todo)}
                />
            ))}
            {message}
        </Stack>
    )
}

TodoList.defaultProps = {
    width: 200,
    height: 200,
    todos: [
        {
            id: 0,
            value: "Clean room",
            date: new Date(),
            completed: false,
        },
        {
            id: 1,
            value: "Fold laundry",
            date: new Date(),
            complete: false,
        },
    ],
    onEdit: () => null,
    onComplete: () => null,
    onRemove: () => null,
    onRestore: () => null,
    completed: false,
}
