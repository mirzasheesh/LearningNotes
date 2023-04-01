import { Injectable } from '@nestjs/common';

import { createOrderInput, processOrderInput, deliverOrderInput, statusReturn } from './datatypes/order.datatypes';

const enum OrderStatus {
    CREATED = "CREATED",
    PROCESSING = "PROCESSING",
    DELIVERED = "DELIVERED",
}

@Injectable()
export class OrderService {

    constructor() { }

    create(orderInput: createOrderInput): statusReturn {

        console.log("OrderValue:", orderInput.orderValue);
        return ({ status: OrderStatus.CREATED });
    }

    process(processInput: processOrderInput): statusReturn {

        console.log("RecieptID:", processInput.receiptID);
        return ({ status: OrderStatus.PROCESSING });
    }

    deliver(deliverInput: deliverOrderInput): statusReturn {

        console.log("OrderID:", deliverInput.orderID);
        return ({ status: OrderStatus.DELIVERED });
    }
}