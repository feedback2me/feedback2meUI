import React from 'react';
import { Button } from 'antd';
import * as Styled from './style';
import PropTypes from 'prop-types';

const AddTodoForm = ({ todoName, onChangeTodoName, onAdd }) => (
    <div>
        <Styled.AddTodoNameInput value={todoName} onChange={onChangeTodoName} />
        <Button type="primary" onClick={onAdd}>Add Todo</Button>
    </div>
);

AddTodoForm.propTypes = {
    todoName: PropTypes.string.isRequired,
    onChangeTodoName: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default AddTodoForm;