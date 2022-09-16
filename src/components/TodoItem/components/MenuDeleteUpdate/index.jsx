import styles from './MenuDeleteUpdate.module.scss'

function MenuDeleteUpdate({
    deleteTodo,
    setToggleModifyTodo,
    setShowMenuUpdateDelete,
}) {
    return (
        <div className={styles.container_menuDeleteUpdate}>
            <button
                className="btn btn-delete-todo"
                onClick={(e) => {
                    e.stopPropagation()
                    setToggleModifyTodo(true)
                    setShowMenuUpdateDelete(false)
                }}
            >
                Modify
            </button>
            <button className="btn btn-delete-todo" onClick={deleteTodo}>
                Delete
            </button>
        </div>
    )
}

export default MenuDeleteUpdate
