import {all} from 'redux-saga/effects'
import { counterSaga } from '../features/counter/counterSaga';
function* helloSaga(){
    console.log("hello saga");
}
export default function *rootSaga(){
    console.log('rootsaga');
    yield all([helloSaga(),counterSaga()])
}