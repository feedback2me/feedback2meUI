import { List, Record } from 'immutable';
import constants from '../utils/constants';

const TopBarRecord = Record({
    selectedMenuId: '2',
});

export default {
    visibilityFilter: constants.visibilityFilters.SHOW_ALL,
    todos: List(),
    topBar: new TopBarRecord(),
};
