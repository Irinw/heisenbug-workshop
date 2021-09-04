import {AppState, Search} from "../contracts/app-state.contracts";

export const initialState: AppState = {
    cards: [],
    purchases: [],
    search: {} as Search
};