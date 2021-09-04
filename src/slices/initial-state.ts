import {AddressDetails, AppState, PaymentDetails, Search} from "../contracts/app-state.contracts";

export const initialState: AppState = {
    cards: [],
    purchases: [],
    search: {} as Search,
    paymentDetails: {} as PaymentDetails,
    addressDetails: {} as AddressDetails
};