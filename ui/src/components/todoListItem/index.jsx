import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const TodoListItem = ({ onClick, completed, text }) => (
    <li onClick={onClick}>
        <Styled.Text completed={completed}>{text}</Styled.Text>
    </li>
);

TodoListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default TodoListItem;
