import styled from 'styled-components';

export const Text = styled.div`
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    display: inline-block;
    padding-top: 5px;
    cursor: pointer;
`;
