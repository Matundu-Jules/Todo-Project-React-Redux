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
import { filteredTodoDataSelector, filterSelector } from '../../store/selectors'
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
        // Call the selector //
        return {
            todos: filteredTodoDataSelector(state),
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
