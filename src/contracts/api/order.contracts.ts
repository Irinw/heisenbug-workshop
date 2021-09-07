export interface SubmitOrderRequest {
    catIds: string[];
}
export interface SubmitOrderResponse {
    orderId: string;
    status: boolean;
}