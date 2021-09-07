import {CATS_API_URL} from "../constants/api-constants";
import {setCards} from "../slices/cards.slice";
import {put} from 'redux-saga/effects'
import {CatInfo, ICard} from "../components/card/card.contracts";

export function* cardsSaga() {
    const response: Response = yield fetch(
        CATS_API_URL
    );
    const serverData: ICard[] = yield response.json();
    const cards: CatInfo[] = convertServerDataToCatInfo(serverData);
    yield put(setCards(cards));
}

function convertServerDataToCatInfo(serverData: ICard[]): CatInfo[] {
    return serverData.map(item => ({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.adaptability * 100,
        temperament: item.temperament,
    }));
}