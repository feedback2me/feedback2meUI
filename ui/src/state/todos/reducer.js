import initialState from '../state';
import constants from '../../utils/constants';

const toggleTodo = (todo, action) => {
    if (todo.id === action.id) {
        return { ...todo, completed: !todo.completed };
    }
    return todo;
};

const todosReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case constants.addTodo:
            return state.push({
                id: action.id,
                text: action.text,
                completed: false,
            });
        case constants.toggleTodo:
            return state.map((todo) => toggleTodo(todo, action));
        default:
            return state;
    }
};

export default todosReducer;
