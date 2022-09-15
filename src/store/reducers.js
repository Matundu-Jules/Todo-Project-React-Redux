import * as actions from './actions'
import { combineReducers } from 'redux'

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

const todos = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_TODO: {
            return [...state, action.todo]
        }
        case actions.MODIFY_TODO: {
            return state.map((t, i) => {
                if (i === action.index) {
                    t.name = action.todo
                }
                return t
            })
        }
        case actions.DELETE_TODO: {
            return state.filter((t, i) => i !== action.index)
        }
        case actions.TOGGLE_ACTIVE_TODO: {
            return state.map((t, i) => {
                if (i === action.index) {
                    t.active = !t.active
                }
                return t
            })
        }
        case actions.TOGGLE_DONE_TODO: {
            return state.map((t, i) => {
                if (i === action.index) {
                    t.done = !t.done
                }
                return t
            })
        }
        default: {
            return state
        }
    }
}

const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case actions.SET_FILTER: {
            return action.filter
        }
        default: {
            return state
        }
    }
}

export const todosReducer = combineReducers({ todos, filter })
