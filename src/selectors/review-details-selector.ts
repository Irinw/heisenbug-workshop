import {AppState} from "../contracts/app-state.contracts";

export const isPaymentDetailsFormFilled = (state: AppState) =>
    state.paymentDetails.cvv &&
    state.paymentDetails.cardNumber &&
    state.paymentDetails.expiryDate &&
    state.paymentDetails.cardName;

export const isShippingAddressFormFilled = (state: AppState) =>
    state.addressDetails.addressLine1 &&
    state.addressDetails.city &&
    state.addressDetails.country &&
    state.addressDetails.zipCode &&
    state.addressDetails.firstName &&
    state.addressDetails.lastName;

export const orderInfoSelector = (state: AppState) => state.orderInfo;