import Filters from '../Filters'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.scss'

function TodoList() {
    return (
        <div className={styles.container_todoList}>
            <h2>Todo List</h2>
            <Filters />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList
