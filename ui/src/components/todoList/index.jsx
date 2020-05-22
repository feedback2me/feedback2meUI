import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import TodoListItem from '../todoListItem';
import * as Styled from './style';

const TodoList = ({ todos, toggleTodo }) => (
    <Styled.ListWrapper data-id="todoList">
        {todos.map((todo) => (
            <TodoListItem
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </Styled.ListWrapper>
);

TodoList.propTypes = {
    todos: PropTypes.instanceOf(List),
    toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
