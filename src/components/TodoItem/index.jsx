import { useRef, useState } from 'react'
import MenuDeleteUpdate from './components/MenuDeleteUpdate'
import styles from './TodoItem.module.scss'

function TodoItem({
    todo,
    modifyTodo,
    deleteTodo,
    toggleActiveTodo,
    toggleDoneTodo,
}) {
    const [showMenuUpdateDelete, setShowMenuUpdateDelete] = useState(false)
    const [toggleModifyTodo, setToggleModifyTodo] = useState(false)
    const input = useRef()

    function handleClickMenuDeleteUpdate(e) {
        e.stopPropagation()
        setShowMenuUpdateDelete(!showMenuUpdateDelete)
    }
    function handleClickCancelModify(e) {
        e.stopPropagation()
        setToggleModifyTodo(false)
    }
    function handleClickModifyTodo(e) {
        e.stopPropagation()
        modifyTodo(todo.id, input.current.value)
        setToggleModifyTodo(false)
    }

    return (
        <div className={styles.container_todoItem}>
            <div className={styles.todoText}>
                {toggleModifyTodo ? (
                    <div className={styles.container_modify}>
                        <input
                            type="text"
                            defaultValue={todo.name}
                            ref={input}
                            className={styles.inputModify}
                        />
                        <div className={styles.container_btn_modify_cancel}>
                            <button
                                onClick={handleClickModifyTodo}
                                className={styles.btnModify}
                            >
                                Modify
                            </button>
                            <button
                                onClick={handleClickCancelModify}
                                className={styles.btnCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>{todo.name}</p>
                )}
            </div>
            <div className={styles.todoDetailsMenu}>
                <div className={styles.todoProgressCheck}>
                    <label htmlFor={`isactive-${todo.id}`}>Is Active</label>
                    <input
                        type="checkbox"
                        checked={todo.active}
                        name={`isactive-${todo.id}`}
                        id={`isactive-${todo.id}`}
                        onChange={() => toggleActiveTodo(todo.id)}
                    />
                </div>
                <div className={styles.todoDoneCheck}>
                    <label htmlFor={`isdone-${todo.id}`}>Done</label>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        name={`isdone-${todo.id}`}
                        id={`isdone-${todo.id}`}
                        onChange={() => toggleDoneTodo(todo.id)}
                    />
                </div>

                {/* Menu update/delete */}
                <button
                    aria-label="Menu for modifying and deleting the todo."
                    className={`fa-solid fa-bars ${styles.menuIcon}`}
                    onClick={handleClickMenuDeleteUpdate}
                ></button>
            </div>

            {showMenuUpdateDelete && (
                <MenuDeleteUpdate
                    deleteTodo={deleteTodo}
                    setToggleModifyTodo={setToggleModifyTodo}
                    setShowMenuUpdateDelete={setShowMenuUpdateDelete}
                />
            )}
        </div>
    )
}

export default TodoItem
