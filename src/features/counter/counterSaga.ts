import { takeEvery, delay, takeLatest, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

// function* logger(action:PayloadAction){
//     console.log(action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('waitng 2s');
    yield delay(2000);
    console.log('waitng done,dispatch action');
    yield put(incrementSagaSuccess(action.payload));
}

export function* counterSaga() {
    console.log('counterSaga');
    yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
