import actionTypes from "../actions/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.TODO.ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case actionTypes.TODO.TOGGLE:
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

export default todos;
