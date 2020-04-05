import actionTypes from "../../actions/actionTypes";
import initialState from '../state';

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
  switch (action.type) {
    case actionTypes.FILTER.SET_VISIBILITY:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
