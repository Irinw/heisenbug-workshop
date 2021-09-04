import { combineReducers } from '@reduxjs/toolkit';
import addressDetailsSlice from './address-details.slice';
import cardsSlice from './cards.slice';
import paymentDetailsSlice from './payment-details.slice';
import purchaseSlice from './purchase.slice';
import searchSlice from './search.slice';

export const rootReducer = combineReducers({
    cards: cardsSlice,
    purchases: purchaseSlice,
    search: searchSlice,
    paymentDetails: paymentDetailsSlice,
    addressDetails: addressDetailsSlice
})