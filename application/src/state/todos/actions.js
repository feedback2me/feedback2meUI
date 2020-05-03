import constants from '../../utils/constants';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: constants.addTodo,
    id: nextTodoId++,
    text,
});

export const toggleTodo = (id) => ({
    type: constants.toggleTodo,
    id,
});
