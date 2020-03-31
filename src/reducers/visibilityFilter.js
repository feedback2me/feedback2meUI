import { VisibilityFilters } from "../actions/filterActions";
import actionTypes from "../actions/actionTypes";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case actionTypes.FILTER.SET_VISIBILITY:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
