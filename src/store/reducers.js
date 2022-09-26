import * as actions from './actions'

// Modify reducers for async data //
// Example of the new state :
// {
//     todos: {
//         data: [],
//         loading: false,
//         error: null
//     }
//     filter: 'SHOW_ALL'
// }

export const todos = (
    state = {
        data: [],
        loading: false,
        error: null,
    },
    action
) => {
    switch (action.type) {
        case actions.ADD_TODO_SUCCESS: {
            return {
                ...state,
                data: [...state.data, action.todo],
            }
        }
        case actions.ADD_TODO_ERROR: {
            return {
                ...state,
                error: action.error,
            }
        }
        case actions.MODIFY_TODO: {
            return {
                ...state,
                data: state.data.map((t) =>
                    t.id === action.index ? { ...t, name: action.todo } : t
                ),
            }
        }
        case actions.DELETE_TODO: {
            return {
                ...state,
                data: state.data.filter((t) => t.id !== action.index),
            }
        }
        case actions.TOGGLE_ACTIVE_TODO: {
            return {
                ...state,
                data: state.data.map((t) =>
                    t.id === action.index ? { ...t, active: !t.active } : t
                ),
            }
        }
        case actions.TOGGLE_DONE_TODO: {
            return {
                ...state,
                data: state.data.map((t) =>
                    t.id === action.index ? { ...t, done: !t.done } : t
                ),
            }
        }
        case actions.REQUEST_TODO: {
            return {
                ...state,
                loading: true,
            }
        }
        case actions.FETCH_TODO_SUCCESS: {
            if (action.todos) {
                return {
                    ...state,
                    data: [...state.data, ...action.todos],
                    loading: false,
                    error: null,
                }
            } else {
                return {
                    ...state,
                    loading: false,
                }
            }
        }
        case actions.FETCH_TODO_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }
        default: {
            return state
        }
    }
}

export const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case actions.SET_FILTER: {
            return action.filter
        }
        default: {
            return state
        }
    }
}
