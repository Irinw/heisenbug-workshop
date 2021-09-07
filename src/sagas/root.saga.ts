import {cardsSaga} from "./cards-saga";
import {fork, takeLatest} from 'redux-saga/effects'
import {submitOrderSaga} from "./submit-order-saga";

export function* rootSaga(){
    yield fork(cardsSaga);
    yield takeLatest('SUBMIT_ORDER', submitOrderSaga)
}