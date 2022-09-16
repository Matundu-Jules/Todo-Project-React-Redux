import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.scss'
import { legacy_createStore as createStore } from 'redux'
import { todosReducer } from './store/reducers'

// Initialize the Redux Store //
const store = createStore(todosReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
