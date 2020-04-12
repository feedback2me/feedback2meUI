import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../state/todos/selectors';
import * as actions from '../state/todos/actions';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
