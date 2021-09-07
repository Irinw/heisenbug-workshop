import {put, select} from "redux-saga/effects";
import {AppState} from "../contracts/app-state.contracts";
import {SUBMIT_ORDER_URL} from "../constants/api-constants";
import {SubmitOrderRequest, SubmitOrderResponse} from "../contracts/api/order.contracts";
import {setOrder} from "../slices/order.slice";

export function* submitOrderSaga() {
    const state: AppState = yield select();
    const catIds = state.purchases.map(purchase => purchase.id);
    const order: SubmitOrderRequest = {catIds};
    const response: SubmitOrderResponse = yield fetch(SUBMIT_ORDER_URL,
        {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                "Authorization": "Bearer ACCESS-TOKEN"
            }
        }
    );
    if (response.status) {
        yield put(setOrder({orderId: response.orderId || '2001539'}));
    }
}