import { CatInfo } from "../api/contracts";
import { AppState } from "../contracts/app-state.contracts";

export const cardsSelector = (state: AppState) => state.cards;
export const filteredCardsSelector = (state: AppState) => filterCards(state);

function filterCards({ cards, search, purchases }: AppState): CatInfo[] {
    const searchPattern = search?.pattern?.toLowerCase();
    return searchPattern ? cards.filter(card =>
        purchases.some(p => p.id === card.id) ||
        card.name.toLowerCase().includes(searchPattern) ||
        card.description.toLowerCase().includes(searchPattern) ||
        card.temperament.toLowerCase().includes(searchPattern))
        : cards
}