import * as React from "react"
import { Override, Data } from "framer"
import { TodoItem } from "./TodoItem"
import { createStore } from "./CreateStore"

// --------------------- Tabs -------------------------

const state = Data({
    currentTab: 0,
})

export function Page(): Override {
    return {
        currentPage: state.currentTab,
        onChangePage: page => {
            if (state.currentTab !== page) {
                state.currentTab = page
            }
        },
    }
}

export function Tabs(): Override {
    return {
        currentTab: state.currentTab,
        onChangeTab: tab => {
            state.currentTab = tab
        },
    }
}

// --------------------- ToDos -------------------------

const useTodos = createStore({
    todos: [
        {
            id: 0,
            value: "Clean room",
            date: new Date(),
            complete: false,
        },
        {
            id: 1,
            value: "Fold laundry",
            date: new Date(),
            complete: false,
        },
        {
            id: 2,
            value: "Change sheets",
            date: new Date(),
            complete: false,
        },
        {
            id: 3,
            value: "Water plants",
            date: new Date(),
            complete: true,
        },
    ],
})

// number to track ids
let i = 3

// Update a todo in the list of todos

const getUpdatedTodos = (todos, todo) => {
    const workingTodos = [...todos]
    let original = workingTodos.find(t => t.id === todo.id)
    const index = workingTodos.indexOf(original)
    workingTodos[index] = { ...original, ...todo }

    return workingTodos
}

// TodoList for incomplete todos

export function TodoList(): Override {
    const [state, setState] = useTodos()

    // Update one of the todos
    const updateTodo = todo => {
        const todos = getUpdatedTodos(state.todos, {
            ...todo,
            date: new Date(),
        })
        setState({
            ...state,
            todos,
        })
    }

    // Toggle a todo between complete / incomplete
    const completeTodo = todo => {
        const todos = getUpdatedTodos(state.todos, {
            ...todo,
            complete: true,
        })

        setState({
            ...state,
            todos,
        })
    }

    return {
        readOnly: false,
        todos: state.todos.filter(todo => !todo.complete),
        onComplete: completeTodo,
        onEdit: updateTodo,
    }
}

// TodoList for completed todos

export function CompleteList(): Override {
    const [state, setState] = useTodos()

    const removeTodo = todo => {
        const todos = [...state.todos]
        let original = todos.find(t => t.id === todo.id)
        const index = todos.indexOf(original)
        todos.splice(index, 1)

        setState({
            ...state,
            todos,
        })
    }

    const updateTodo = todo => {
        const todos = getUpdatedTodos(state.todos, todo)
        setState({
            ...state,
            todos,
        })
    }

    const restoreTodo = todo => {
        const todos = getUpdatedTodos(state.todos, {
            ...todo,
            complete: false,
        })

        setState({
            ...state,
            todos,
        })
    }

    return {
        completed: true,
        todos: state.todos.filter(todo => todo.complete),
        onRemove: removeTodo,
        onRestore: restoreTodo,
    }
}

// ------------------- New ToDos -----------------------

const useTodoField = createStore({
    value: "",
    focused: false,
})

// Field to enter new todo

export function NewTodoInput(): Override {
    const [field, setField] = useTodoField()

    return {
        value: field.value,
        width: 100,
        onFocus: () =>
            setTimeout(() => {
                setField({ ...field, focused: true })
            }, 200),
        onBlur: () =>
            setTimeout(() => {
                setField({ value: "", focused: false })
            }, 200),
        onValueChange: value => {
            setField({ value })
        },
    }
}

// Button to add todo to list

export function NewTodoButton(): Override {
    const [state, setState] = useTodos()
    const [field] = useTodoField()

    const canSubmit = field.value.length > 0

    const submitTodo = () => {
        // update id number
        i++

        const todos = [
            ...state.todos,
            {
                id: i,
                value: field.value,
                date: new Date(),
                complete: false,
            },
        ]

        setState({
            ...state,
            todos,
        })
    }

    return {
        type: canSubmit ? "primary" : "secondary",
        disabled: !canSubmit,
        onTap: submitTodo,
    }
}
