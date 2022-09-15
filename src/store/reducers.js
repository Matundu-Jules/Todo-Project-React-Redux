import * as actions from './actions'

// Example of state //
// {
//      todos : [],
//      filter: '',
// }

// Example of todo //
// {
//      name : '',
//      active: boolean,
//      done: boolean,

// }

export const todoReducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo],
            }
        }
        case actions.MODIFY_TODO: {
            return {
                ...state,
                todos: state.todos.map((t, i) => {
                    if (i === action.index) {
                        t.name = action.todo
                    }
                    return t
                }),
            }
        }
        case actions.DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter((t, i) => i !== action.index),
            }
        }
        case actions.SET_FILTER: {
            return {
                ...state,
                filter: action.filter,
            }
        }
        case actions.TOGGLE_ACTIVE_TODO: {
            return {
                ...state,
                todos: state.todos.map((t, i) => {
                    if (i === action.index) {
                        t.active = !t.active
                    }
                    return t
                }),
            }
        }
        case actions.TOGGLE_DONE_TODO: {
            return {
                ...state,
                todos: state.todos.map((t, i) => {
                    if (i === action.index) {
                        t.done = !t.done
                    }
                    return t
                }),
            }
        }
        default: {
            return state
        }
    }
}
