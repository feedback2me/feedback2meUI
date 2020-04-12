import initialState from '../state';
import constants from '../../utils/constants';

const todos = (state = initialState.todos, action) => {
    switch (action.type) {
    case constants.addTodo:
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false,
            },
        ];
    case constants.toggleTodo:
        return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    default:
        return state;
    }
};

export default todos;
