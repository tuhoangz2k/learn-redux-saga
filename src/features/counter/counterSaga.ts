import { takeEvery } from "redux-saga/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {increment} from './counterSlice'
function* logger(action:PayloadAction){
    console.log(action);
}
export function * counterSaga(){
console.log('counterSaga');
// console.log(increment());
yield takeEvery(increment().type,logger)
}