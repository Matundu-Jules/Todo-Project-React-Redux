import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import * as reducers from './reducers'

// Assembly of the different reducers //
const todosReducer = combineReducers(reducers)

// Initialize the Redux Store //
const store = createStore(todosReducer)
export default store
