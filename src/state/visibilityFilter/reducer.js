import initialState from '../state';
import constants from '../../utils/constants';

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
    switch (action.type) {
    case constants.setVisibilityFilter:
        return action.filter;
    default:
        return state;
    }
};

export default visibilityFilter;
