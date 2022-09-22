import { combineReducers } from 'redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// Middleware redux-logger //
import logger from 'redux-logger'
// redux-devtools-extension //
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension'
// Middleware redux-thunk for async //
import thunkMiddleware from 'redux-thunk'

import * as reducers from './reducers'

// Assembly of the different reducers //
const todosReducer = combineReducers(reducers)

// Show logs only in development //
const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

// Initialize the Redux Store and call the middleware //
const store = createStore(
    todosReducer,
    composeWithDevToolsDevelopmentOnly(applyMiddleware(...middlewares))
)
export default store
