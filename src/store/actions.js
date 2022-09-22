import apiFirebase from '../config/api.firebase'

// ACTIONS //
export const ADD_TODO = 'add todo'
export const MODIFY_TODO = 'modify todo'
export const DELETE_TODO = 'delete todo'
export const SET_FILTER = 'set filter'
export const TOGGLE_ACTIVE_TODO = 'toggle active todo'
export const TOGGLE_DONE_TODO = 'toggle done todo'

// Add new action for get the asyn data //

// Set loading in true :
export const REQUEST_TODO = 'request todo'
// Fetch the data :
export const FETCH_TODO = 'fetch todo'
// Get Firebase data :
export const FETCH_TODO_SUCCESS = 'fetch todo success'
// Set error :
export const FETCH_TODO_ERROR = 'fetch todo error'

// Possible Filters :
export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

// ACTIONS CREATOR //
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo,
    }
}

export const modifyTodo = (index, todo) => {
    return {
        type: MODIFY_TODO,
        index,
        todo,
    }
}

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index,
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter,
    }
}

export const toggleActiveTodo = (index) => {
    return {
        type: TOGGLE_ACTIVE_TODO,
        index,
    }
}

export const toggleDoneTodo = (index) => {
    return {
        type: TOGGLE_DONE_TODO,
        index,
    }
}

// Add new action for get the async data //

// Set loading in true :
export const requestTodo = () => {
    return {
        type: REQUEST_TODO,
    }
}

// Get Firebase data :
export const fetchTodoSuccess = (todos) => {
    return {
        type: FETCH_TODO_SUCCESS,
        todos,
    }
}

// Set error :
export const fetchTodoError = (error) => {
    return {
        type: FETCH_TODO_ERROR,
        error,
    }
}

// Fetch the data :
export const fetchTodo = () => {
    return (dispatch) => {
        dispatch(requestTodo())
        return apiFirebase.get('todos.json').then(
            (response) => {
                const data = response.data
                dispatch(fetchTodoSuccess(data))
            },
            (error) => {
                dispatch(fetchTodoError(error))
            }
        )
    }
}
