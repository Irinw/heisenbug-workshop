import {AppState} from "../contracts/app-state.contracts";
import {CatInfo} from "../components/card/card.contracts";

export const cardsSelector = (state: AppState) => state.cards;
export const filteredCardsSelector = (state: AppState) => filterCards(state);

function filterCards({cards, search}: AppState): CatInfo[] {
    const searchPattern = search?.pattern?.toLowerCase();
    return searchPattern ? cards.filter(card =>
            card.name.toLowerCase().includes(searchPattern) ||
            card.temperament.toLowerCase().includes(searchPattern))
        : cards
}