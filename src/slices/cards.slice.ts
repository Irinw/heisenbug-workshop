import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./initial-state";
import {ICard} from "../components/card/card.contracts";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState.cards,
    reducers: {
        setCards(state: ICard[], action: PayloadAction<ICard[]>) {
            return action.payload;
        }
    },
});

export default cardsSlice.reducer;
export const { setCards } = cardsSlice.actions;