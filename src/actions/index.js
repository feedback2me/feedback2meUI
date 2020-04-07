import actionTypes from "./actionTypes";
import FilterActions from "./filterActions";
import TodoActions from "./todoActions";

const Actions = {
  todo: new TodoActions(actionTypes.TODO),
  filter: new FilterActions(actionTypes.FILTER)
};

export default Actions;
