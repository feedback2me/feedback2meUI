import constants from '../../utils/constants';
import initialState from '../state';

const topBarReducer = (state = initialState.topBar, action) => {
    switch (action.type) {
        case constants.updateSelectedMenuId:
            return state.set('selectedMenuId', action.id);
        default:
            return state;
    }
};

export default topBarReducer;
