import styled from 'styled-components';

export const TodoListItem = styled.li`
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;
