import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as todoActions from '../../state/todos/actions';
import AddTodoForm from '../../components/addTodoForm';

const AddTodo = ({ dispatch }) => {
    const [todoName, setTodoName] = useState('');

    const onChangeInput = (e) => {
        setTodoName(e.target.value);
    };

    const onAdd = (e) => {
        e.preventDefault();
        if (!todoName.trim()) {
            return;
        }
        dispatch(todoActions.addTodo(todoName));
        setTodoName('');
    };

    return (
        <AddTodoForm
            todoName={todoName}
            onChangeTodoName={onChangeInput}
            onAdd={onAdd}
        />
    );
};

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
