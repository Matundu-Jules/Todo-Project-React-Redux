import { createSelector } from 'reselect'
import { visibilityFilters } from './actions'

// Basic Selector Example //
export const filterSelector = (state) => state.filter
export const todoSelector = (state) => state.todos

// a memoized selector //
export const todosListSelector = createSelector([todoSelector], (todos) =>
    todos ? todos.data : null
)

// selector using multiple selectors //
export const filteredTodoDataSelector = createSelector(
    [filterSelector, todosListSelector],
    (filter, todos) => {
        if (todos && filter) {
            switch (filter) {
                case visibilityFilters.SHOW_DONE: {
                    return todos.filter((t) => t.done)
                }
                case visibilityFilters.SHOW_ACTIVE: {
                    return todos.filter((t) => t.active)
                }
                default: {
                    return todos
                }
            }
        }
    }
)
