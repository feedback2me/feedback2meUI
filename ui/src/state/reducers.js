import { combineReducers } from 'redux';
import todosReducer from './todos/reducer';
import topBarReducer from './topBar/reducer';
import visibilityFilter from './visibilityFilter/reducer';

export default combineReducers({
    todos: todosReducer,
    topBar: topBarReducer,
    visibilityFilter,
});
