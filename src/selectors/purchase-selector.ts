import {AppState} from "../contracts/app-state.contracts";
import {ICard} from "../components/card/card.contracts";

export const numberOfPurchasesSelector = (state: AppState) => state.purchases.length;
export const purchasesSelector = (state: AppState) => state.purchases;
export const purchaseTotalPrice = (state: AppState) => calculateTotalPurchasePrice(state.purchases);

function calculateTotalPurchasePrice(purchases: ICard[]): number {
    let price = 0;
    purchases.forEach(purchase => price+=purchase.adaptability * 100);
    return price;

}