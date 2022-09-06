import styles from './MenuDeleteUpdate.module.scss'

function MenuDeleteUpdate() {
    return (
        <div className={styles.container_menuDeleteUpdate}>
            <button className="btn btn-delete-todo">Modify</button>
            <button className="btn btn-delete-todo">Delete</button>
        </div>
    )
}

export default MenuDeleteUpdate
