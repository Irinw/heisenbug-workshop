import {CATS_API_URL} from "../constants/api-constants";
import {setCards} from "../slices/cards.slice";
import {put} from 'redux-saga/effects'
import {ICard} from "../components/card/card.contracts";

export function* cardsSaga() {
    const response: Response = yield fetch(
        CATS_API_URL
    );
    const cards: ICard[] = yield response.json()
    yield put(setCards(cards));
}