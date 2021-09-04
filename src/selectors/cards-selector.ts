import {AppState} from "../contracts/app-state.contracts";
import {ICard} from "../components/card/card.contracts";

export const cardsSelector = (state: AppState) => state.cards;
export const filteredCardsSelector = (state: AppState) => filterCards(state);

function filterCards({cards, search}: AppState): ICard[] {
    const searchPattern = search?.pattern;
    return searchPattern ? cards.filter(card =>
            card.name.toLowerCase().includes(searchPattern) ||
            card.temperament.toLowerCase().includes(searchPattern))
        : cards
}