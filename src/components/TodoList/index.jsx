import { connect } from 'react-redux'
import { visibilityFilters } from '../../store/actions'
import Filters from '../Filters'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.scss'

function TodoList({ todos }) {
    return (
        <div className={styles.container_todoList}>
            <h2>Todo List</h2>
            <Filters />
            {todos && todos.map((t) => <TodoItem key={t.name} todo={t} />)}
        </div>
    )
}

export default connect((state) => {
    const filter = state.filter
    let todos

    switch (filter) {
        case visibilityFilters.SHOW_DONE: {
            todos = state.todos.filter((t) => t.done)
            break
        }
        case visibilityFilters.SHOW_ACTIVE: {
            todos = state.todos.filter((t) => t.active)
            break
        }
        default: {
            todos = state.todos
            break
        }
    }

    return {
        todos,
    }
})(TodoList)
