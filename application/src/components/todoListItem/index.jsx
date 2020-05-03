import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const TodoListItem = ({ onClick, completed, text }) => (
    <Styled.TodoListItem onClick={onClick} completed={completed}>
        {text}
    </Styled.TodoListItem>
);

TodoListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default TodoListItem;
