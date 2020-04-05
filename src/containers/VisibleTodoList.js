import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import constants from '../utils/constants';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case constants.visibilityFilters.SHOW_ALL:
      return todos;
    case constants.visibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case constants.visibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
