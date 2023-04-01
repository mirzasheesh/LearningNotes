export type createOrderInput = {
    orderValue: Number,
}

export type processOrderInput = {
    receiptID: Number,
}

export type deliverOrderInput = {
    orderID: Number,
}

export type statusReturn = {
    status: String,
}