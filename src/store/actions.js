import apiFirebase from '../config/api.firebase'

// FILTERS :
export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

// ACTIONS TODO SYNC //
export const MODIFY_TODO = 'modify todo'
export const DELETE_TODO = 'delete todo'
export const SET_FILTER = 'set filter'
export const TOGGLE_ACTIVE_TODO = 'toggle active todo'
export const TOGGLE_DONE_TODO = 'toggle done todo'

// ACTIONS TODO ASYNC //
// GET TODO //
export const REQUEST_TODO = 'request todo' // Loading
export const FETCH_TODO = 'fetch todo'
export const FETCH_TODO_SUCCESS = 'fetch todo success'
export const FETCH_TODO_ERROR = 'fetch todo error'

// ADD TODO //
export const TRY_ADD_TODO = 'try add todo'
export const ADD_TODO_SUCCESS = 'add todo success'
export const ADD_TODO_ERROR = 'add todo error'

// ACTIONS CREATOR //
export const tryAddTodo = (todo) => {
    return (dispatch, getState) => {
        const todos = [...getState().todos.data, todo]
        return apiFirebase.put('todos.json', todos).then(
            (response) => dispatch(addTodoSuccess(todo)),
            (error) => dispatch(addTodoError(error))
        )
    }
}

export const addTodoSuccess = (todo) => {
    return {
        type: ADD_TODO_SUCCESS,
        todo,
    }
}

export const addTodoError = (error) => {
    return {
        type: ADD_TODO_ERROR,
        error,
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
