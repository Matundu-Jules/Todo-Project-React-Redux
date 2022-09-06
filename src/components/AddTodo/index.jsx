import styles from './AddTodo.module.scss'

function AddTodo() {
    return (
        <div className={styles.container_addTodo}>
            <h2>Add Todo</h2>
            <form className={styles.formAddTodo}>
                <input type="text" />
                <button className="btn">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
