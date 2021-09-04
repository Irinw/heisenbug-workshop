import {AppState} from "../contracts/app-state.contracts";

export const isReviewAvailableSelector = (state: AppState) =>
    state.addressDetails.state &&
    state.addressDetails.addressLine2 &&
    state.addressDetails.addressLine1 &&
    state.addressDetails.city &&
    state.addressDetails.country &&
    state.addressDetails.zipCode &&
    state.addressDetails.firstName &&
    state.addressDetails.lastName &&
    state.paymentDetails.cvv &&
    state.paymentDetails.cardNumber &&
    state.paymentDetails.expiryDate &&
    state.paymentDetails.cardName;