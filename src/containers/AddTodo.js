import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as todoActions from '../state/todos/actions';

const AddTodo = ({ dispatch }) => {
    let input;

    const onSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(todoActions.addTodo(input.value));
        input.value = '';
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={(node) => { input = node; }} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
