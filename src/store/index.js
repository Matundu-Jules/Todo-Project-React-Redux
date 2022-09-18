import { combineReducers } from 'redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import * as reducers from './reducers'

// Assembly of the different reducers //
// const todosReducer = combineReducers(reducers)

// Initialize the Redux Store //
// let store = createStore(todosReducer)
// export default store

////////////////////////////////////////////////////////////////////////////

// Assembly of the different reducers //
// const todosReducer = combineReducers(reducers)

// Initialize the Redux Store //
// const store = createStore(todosReducer)

// Example of Redux Middleware //
// const middleware = store => next => action => {
//      // do something
//      next(action)
// }

// export default store

////////////////////////////////////////////////////////////////////////////

// Assembly of the different reducers //
// const todosReducer = combineReducers(reducers)

// Initialize the Redux Store //
// const store = createStore(todosReducer)

// Copy of dispatch() and erase the native dispatch() method //
// const next = store.dispatch
// store.dispatch = (action) => {
//     console.log('action : ', action)
//     return next(action)
// }

// export default store

////////////////////////////////////////////////////////////////////////////

// Assembly of the different reducers //
// const todosReducer = combineReducers(reducers)

// Initialize the Redux Store //
// const store = createStore(todosReducer)

// Create middleware in separate files //
// const middleware1 = (store) => {
//     const next = store.dispatch
//     store.dispatch = (action) => {
//         console.log('action : ', action)
//         return next(action)
//     }
// }

// const middleware2 = (store) => {
//     const next = store.dispatch
//     store.dispatch = (action) => {
//         console.log('middleware2')
//         return next(action)
//     }
// }

// Call middleware in a file //
// middleware1(store)
// middleware2(store)

// export default store

////////////////////////////////////////////////////////////////////////////

// Assembly of the different reducers //
// const todosReducer = combineReducers(reducers)

// Initialize the Redux Store //
// const store = createStore(todosReducer)

// Create middlewares //
// const middleware1 = (store) => {
//     const next = store.dispatch
//     store.dispatch = (action) => {
//         console.log('action : ', action)
//         return next(action)
//     }
// }

// const middleware2 = (store) => {
//     const next = store.dispatch
//     store.dispatch = (action) => {
//         console.log('middleware2')
//         return next(action)
//     }
// }

// Create method for call one time the store //
// const myMiddleware = (store, middlewares) => {
//     const mids = middlewares.slice()
//     mids.reverse() // For call the middlewares in order
//     mids.forEach((m) => m(store))
// }

// Call middlewares //
// myMiddleware(store, [middleware1, middleware2])

// export default store

////////////////////////////////////////////////////////////////////////////

// Assembly of the different reducers //
// const todosReducer = combineReducers(reducers)

// Initialize the Redux Store //
// let store = createStore(todosReducer)

// Create middlewares - Call dispatch from the middlewares //
// const middleware1 = (store) => {
//     return (next) => {
//         return (action) => {
//             console.log('action : ', action)
//             return next(action)
//         }
//     }
// }

// const middleware2 = (store) => {
//     return (next) => {
//         return (action) => {
//             console.log('middleware2')
//             return next(action)
//         }
//     }
// }

// Create method for call one time the store //
// const myMiddleware = (store, middlewares) => {
//     const mids = middlewares.slice()
//     mids.reverse()
//     let dispatch = store.dispatch // Copy the native Redux dispatch
//     // Get dispatch and assign the return of the middlewares :
//     mids.forEach((m) => (dispatch = m(store)(dispatch)))
//     return {
//         ...store,
//         dispatch,
//     }
// }
// Call middlewares //
// store = myMiddleware(store, [middleware1, middleware2])

// export default store

////////////////////////////////////////////////////////////////////////////

// Assembly of the different reducers //
// const todosReducer = combineReducers(reducers)

// Initialize the Redux Store //
// let store = createStore(todosReducer)

// Notation ES6 //
// const middleware1 = (store) => (next) => (action) => {
//     console.log('action : ', action)
//     return next(action)
// }

// const middleware2 = (store) => (next) => (action) => {
//     console.log('middleware2')
//     return next(action)
// }

// const myMiddleware = (store, middlewares) => {
//     const mids = middlewares.slice()
//     mids.reverse()
//     let dispatch = store.dispatch
//     mids.forEach((m) => (dispatch = m(store)(dispatch)))
//     return {
//         ...store,
//         dispatch,
//     }
// }

// store = myMiddleware(store, [middleware1, middleware2])

// export default store

////////////////////////////////////////////////////////////////////////////

// Assembly of the different reducers //
// const todosReducer = combineReducers(reducers)

// // Create Middleware //
// const middleware1 =
//     ({ dispatch, getState }) =>
//     (next) =>
//     (action) => {
//         console.log('action : ', action)
//         return next(action)
//     }

// const middleware2 =
//     ({ dispatch, getState }) =>
//     (next) =>
//     (action) => {
//         console.log('middleware2')
//         return next(action)
//     }

// Initialize the Redux Store and use middlewares with applyMiddleware //
// let store = createStore(todosReducer, applyMiddleware(middleware1, middleware2))

// export default store

////////////////////////////////////////////////////////////////////////////

// Create a logger middleware //

// Assembly of the different reducers //
const todosReducer = combineReducers(reducers)

// Middleware //
const logger =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        console.log('Action : ', action)
        const returnValue = next(action)
        console.log('State : ', getState())
        return returnValue
    }

// Initialize the Redux Store and use middlewares with applyMiddleware //
let store = createStore(todosReducer, applyMiddleware(logger))

export default store
