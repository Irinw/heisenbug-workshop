import {AppState} from "../contracts/app-state.contracts";

export const numberOfPurchasesSelector = (state: AppState) => state.purchases.length;
