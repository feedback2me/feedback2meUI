import {
    takeEvery, call, put, select,
} from 'redux-saga/effects';
import actionTypes from '../../actions/actionTypes';
import { getHelloWorld } from './api';

export function* watchHelloWorld() {
    yield takeEvery(actionTypes.TODO.ADD, requestHelloWorld);
}

function* requestHelloWorld(action) {
    try {
        const response = yield call(getHelloWorld);
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
