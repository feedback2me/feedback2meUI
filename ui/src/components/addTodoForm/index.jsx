import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import * as Styled from './style';

const AddTodoForm = ({ todoName, onChangeTodoName, onAdd }) => (
    <div>
        <Styled.AddTodoNameInput
            data-id="addTodoNameInput"
            value={todoName}
            onChange={onChangeTodoName}
        />
        <Button data-id="addTodoSubmit" type="primary" onClick={onAdd}>
            Add Todo
        </Button>
    </div>
);

AddTodoForm.propTypes = {
    todoName: PropTypes.string.isRequired,
    onChangeTodoName: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default AddTodoForm;
