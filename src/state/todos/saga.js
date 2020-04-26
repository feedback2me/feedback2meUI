import { takeEvery, call } from 'redux-saga/effects';
import { get } from '../../services/api';
import routes from '../../utils/routes';
import constants from '../../utils/constants';

export function* watchHelloWorld() {
    yield takeEvery(constants.addTodo, requestHelloWorld);
}

function* requestHelloWorld() {
    try {
        const response = yield call(get, routes.helloWorldApi);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
