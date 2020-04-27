import constants from '../../utils/constants';

export const getVisibleTodos = (state) => {
    const { todos, visibilityFilter } = state;
    switch (visibilityFilter) {
        case constants.visibilityFilters.SHOW_ALL:
            return todos;
        case constants.visibilityFilters.SHOW_COMPLETED:
            return todos.filter((t) => t.completed);
        case constants.visibilityFilters.SHOW_ACTIVE:
            return todos.filter((t) => !t.completed);
        default:
            throw new Error(`Unknown filter: ${visibilityFilter}`);
    }
};
