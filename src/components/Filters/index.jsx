import styles from './Filters.module.scss'

function Filters() {
    return (
        <div className={styles.container_filters}>
            <h2>Filters</h2>
            <div className={styles.filters}>
                <button className="btn">All</button>
                <button className="btn">In Progress</button>
                <button className="btn">Done</button>
            </div>
        </div>
    )
}

export default Filters
