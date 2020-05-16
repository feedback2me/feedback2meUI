import React from 'react';

import AddTodo from '../../containers/addTodo';
import VisibleTodoList from '../../containers/visibleTodoList';
import TodoActions from '../../components/todoActions';

export const TodoPage = () => (
    <>
        <AddTodo />
        <VisibleTodoList />
        <TodoActions />
    </>
);
