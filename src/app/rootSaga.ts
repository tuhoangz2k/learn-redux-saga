import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/authSaga';
import { counterSaga } from '../features/counter/counterSaga';
export default function* rootSaga() {
    console.log('rootsaga');
    yield all([counterSaga(), authSaga()]);
}
