import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Filters from './components/Filters'
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.container_app}>
            <h1 className={styles.title}>Todo Project</h1>
            <AddTodo />
            <Filters />
            <TodoList />
        </div>
    )
}

export default App
