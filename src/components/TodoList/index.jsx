import { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    visibilityFilters,
    modifyTodo,
    deleteTodo,
    toggleActiveTodo,
    toggleDoneTodo,
    fetchTodo,
} from '../../store/actions'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.scss'

function TodoList({
    todos,
    modifyTodo,
    deleteTodo,
    toggleActiveTodo,
    toggleDoneTodo,
    fetchTodo,
}) {
    useEffect(() => {
        fetchTodo()
    }, [fetchTodo])

    return (
        <div className={styles.container_todoList}>
            <h2>Todo List</h2>
            {todos &&
                todos.map((t, i) => (
                    <TodoItem
                        key={t.id}
                        todo={t}
                        modifyTodo={modifyTodo}
                        deleteTodo={() => deleteTodo(t.id)}
                        toggleActiveTodo={toggleActiveTodo}
                        toggleDoneTodo={toggleDoneTodo}
                    />
                ))}
        </div>
    )
}

export default connect(
    (state) => {
        const filter = state.filter
        let todos

        switch (filter) {
            case visibilityFilters.SHOW_DONE: {
                todos = state.todos.data.filter((t) => t.done)
                break
            }
            case visibilityFilters.SHOW_ACTIVE: {
                todos = state.todos.data.filter((t) => t.active)
                break
            }
            default: {
                todos = state.todos.data
                break
            }
        }

        return {
            todos,
        }
    },
    {
        modifyTodo,
        deleteTodo,
        toggleActiveTodo,
        toggleDoneTodo,
        fetchTodo,
    }
)(TodoList)
