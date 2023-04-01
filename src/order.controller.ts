import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { Metadata } from '@grpc/grpc-js';
import { ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';

import { OrderService } from './order.service';

import { createOrderInput, processOrderInput, deliverOrderInput, statusReturn } from './datatypes/order.datatypes';

@Controller()
export class OrderController {

    orderService = new OrderService();

    @GrpcMethod('Order', 'Create')
    create(requestData: createOrderInput, metadata: Metadata, call: ServerUnaryCall<any, any>): statusReturn {

        return this.orderService.create(requestData);
    }

    @GrpcMethod('Order', 'Process')
    process(requestData: processOrderInput, metadata: Metadata, call: ServerUnaryCall<any, any>): statusReturn {

        return this.orderService.process(requestData);
    }

    @GrpcMethod('Order', 'Deliver')
    deliver(requestData: deliverOrderInput, metadata: Metadata, call: ServerUnaryCall<any, any>): statusReturn {

        return this.orderService.deliver(requestData);
    }
}