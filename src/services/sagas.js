import { fork, all } from 'redux-saga/effects';
import { watchHelloWorld } from './todos/saga';

export default function* rootSaga() {
    yield all([        
        fork(watchHelloWorld),
    ]);
}