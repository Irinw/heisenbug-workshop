import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./initial-state";
import {ICard} from "../components/card/card.contracts";

const purchaseSlice = createSlice({
    name: 'purchases',
    initialState: initialState.purchases,
    reducers: {
        addPurchase(state: ICard[], action: PayloadAction<ICard>) {
            state.push(action.payload);
        },
        removePurchase(state: ICard[], action: PayloadAction<ICard>) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if(index >= 0){
                state.splice(index, 1);
            }
        },
    },
});

export default purchaseSlice.reducer;
export const { addPurchase, removePurchase } = purchaseSlice.actions;