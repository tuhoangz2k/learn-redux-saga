import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
    console.log('handleLogin', payload);
}
function* handleLogout() {
    console.log('handle logout');
}

function* watchLoginFlow() {
    while (true) {
        const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
        yield fork(handleLogin, action.payload);
        yield take(authActions.logout.type);
        yield fork(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}
