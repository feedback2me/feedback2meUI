import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import TodoListItem from '../todoListItem';

const TodoList = ({ todos, toggleTodo }) => (
    <ul data-id="todoList">
        {todos.map((todo) => (
            <TodoListItem
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.instanceOf(List),
    toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
