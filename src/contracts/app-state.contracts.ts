import {ICard} from "../components/card/card.contracts";

export interface AppState {
    cards: ICard[];
    purchases: ICard[];
    search: Search;
    addressDetails: AddressDetails;
    paymentDetails: PaymentDetails;
}

export interface Search {
    pattern: string;
}

export interface AddressDetails {
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
}

export interface PaymentDetails {
    cardName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;

}