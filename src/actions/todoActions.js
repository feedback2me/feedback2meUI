import actionTypes from "./actionTypes";
import { CustomActions } from "../utils/ActionUtils";

export default class TodoActions extends CustomActions {
  nextTodoId = 0;

  add = text => ({
    type: actionTypes.TODO.ADD,
    id: this.nextTodoId++,
    text
  });

  toggle = id => ({
    type: actionTypes.TODO.TOGGLE,
    id
  });
}
