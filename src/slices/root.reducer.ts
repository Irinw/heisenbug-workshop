import { combineReducers } from '@reduxjs/toolkit';
import cardsSlice from './cards.slice';
import purchaseSlice from './purchase.slice';
import searchSlice from './search.slice';

export const rootReducer = combineReducers({
    cards: cardsSlice,
    purchases: purchaseSlice,
    search: searchSlice
})