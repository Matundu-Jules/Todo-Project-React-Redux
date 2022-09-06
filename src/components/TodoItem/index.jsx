import { useState } from 'react'
import MenuDeleteUpdate from './components/MenuDeleteUpdate'
import styles from './TodoItem.module.scss'

function TodoItem(props) {
    const [showMenuUpdateDelete, setShowMenuUpdateDelete] = useState(false)

    function handleClickMenuDeleteUpdate() {
        setShowMenuUpdateDelete(!showMenuUpdateDelete)

        //    if (showMenuUpdateDelete) {
        //        let me
        //    }
    }

    return (
        <div className={styles.container_todoItem}>
            <div className={styles.todoText}>
                <p> My first task </p>
            </div>
            <div className={styles.todoDetailsMenu}>
                <div className={styles.todoProgressCheck}>
                    <label htmlFor="inprogress">In progress</label>
                    <input type="checkbox" name="inprogress" id="inprogress" />
                </div>
                <div className={styles.todoDoneCheck}>
                    <label htmlFor="isdone">Done</label>
                    <input type="checkbox" name="isdone" id="isdone" />
                </div>

                {/* Menu update/delete */}
                <button
                    aria-label="Menu for modifying and deleting the todo."
                    className={`fa-solid fa-bars ${styles.menuIcon}`}
                    onClick={handleClickMenuDeleteUpdate}
                ></button>
            </div>

            {showMenuUpdateDelete && <MenuDeleteUpdate />}
        </div>
    )
}

export default TodoItem
