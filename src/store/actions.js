// ACTIONS //
const ADD_TODO = 'add todo'
const MODIFY_TODO = 'modify todo'
const DELETE_TODO = 'delete todo'
const SET_FILTER = 'set filter'
const TOGGLE_ACTIVE_TODO = 'toggle active todo'
const TOGGLE_DONE_TODO = 'toggle done todo'

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

export const modifyTodo = (todo) => {
    return {
        type: MODIFY_TODO,
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
