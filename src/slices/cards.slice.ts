import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./initial-state";
import {CatInfo} from "../components/card/card.contracts";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState.cards,
    reducers: {
        setCards(state: CatInfo[], action: PayloadAction<CatInfo[]>) {
            return action.payload;
        }
    },
});

export default cardsSlice.reducer;
export const { setCards } = cardsSlice.actions;