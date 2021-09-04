import {cardsSaga} from "./cards-saga";
import {fork} from 'redux-saga/effects'

export function* rootSaga(){
    yield fork(cardsSaga);
}