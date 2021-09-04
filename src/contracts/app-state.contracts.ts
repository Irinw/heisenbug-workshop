import {ICard} from "../components/card/card.contracts";

export interface AppState {
    cards: ICard[];
    purchases: ICard[];
    search: Search;
}

export interface Search {
    pattern: string;
}