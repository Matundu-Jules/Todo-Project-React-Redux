import styles from './Filters.module.scss'
import { connect } from 'react-redux'
import { setFilter, visibilityFilters } from '../../store/actions'

function Filters({ setFilter }) {
    return (
        <div className={styles.container_filters}>
            <h2>Filters</h2>
            <div className={styles.filters}>
                <button
                    className="btn"
                    onClick={() => setFilter(visibilityFilters.SHOW_ALL)}
                >
                    All
                </button>
                <button
                    className="btn"
                    onClick={() => setFilter(visibilityFilters.SHOW_ACTIVE)}
                >
                    In Progress
                </button>
                <button
                    className="btn"
                    onClick={() => setFilter(visibilityFilters.SHOW_DONE)}
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default connect(null, (dispatch) => {
    return {
        setFilter: (filter) => {
            dispatch(setFilter(filter))
        },
    }
})(Filters)
