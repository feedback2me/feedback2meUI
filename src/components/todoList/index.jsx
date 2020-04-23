import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../todoListItem';
import {List} from 'immutable';

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
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
