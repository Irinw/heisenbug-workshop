import { AppState } from "../contracts/app-state.contracts";
import { GroupedPurchase } from "../components/checkout/review.contracts";
import { CatInfo } from "../api/contracts";
import { MAX_COUNT_OF_PURCHASES } from "../constants/app.constants";

export const numberOfPurchasesSelector = (state: AppState) => state.purchases.length;
export const purchasesSelector = (state: AppState) => state.purchases;
export const purchaseTotalPrice = (state: AppState) => calculateTotalPurchasePrice(state.purchases);

export const groupedPurchasesSelector = (state: AppState) => {
    const seen = new Set();
    const purchases = state.purchases;
    const groupedPurchases: GroupedPurchase[] = [];
    purchases.forEach(purchase => {
        if (seen.has(purchase.id)) {
            return;
        }
        const count = purchases.filter(item => item.id === purchase.id).length;
        groupedPurchases.push({ count, purchase })
        seen.add(purchase.id);
    });
    return groupedPurchases.sort((x, y) => x.purchase.name.localeCompare(y.purchase.name));
}

function calculateTotalPurchasePrice(purchases: CatInfo[]): number {
    let price = 0;
    purchases.forEach(purchase => price += purchase.price);
    return price;
}

export const canAddToPurchase = (cat: CatInfo)=> (state: AppState) => {
    const different = new Set<string>();
    state.purchases.forEach(p => different.add(p.id));
    return different.size < MAX_COUNT_OF_PURCHASES || different.has(cat.id);
}