import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';

const Link = ({ active, children, onClick }) => (
    <Styled.LinkButton onClick={onClick} disabled={active}>
        {children}
    </Styled.LinkButton>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Link;
