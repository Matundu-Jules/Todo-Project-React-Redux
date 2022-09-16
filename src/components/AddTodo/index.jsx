import { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions'
import styles from './AddTodo.module.scss'

function AddTodo(props) {
    const input = useRef()

    function handleSubmitTodo(e) {
        e.preventDefault()

        props.addTodo({
            id: crypto.randomUUID(),
            name: input.current.value,
            active: false,
            done: false,
        })

        input.current.value = ''
    }

    return (
        <div className={styles.container_addTodo}>
            <h2>Add Todo</h2>
            <form className={styles.formAddTodo}>
                <input type="text" ref={input} />
                <button className="btn" onClick={handleSubmitTodo}>
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect(null, { addTodo })(AddTodo)
