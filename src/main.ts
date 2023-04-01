import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { OrderModule } from './order.module';

async function main() {

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(OrderModule,
        {
            transport: Transport.GRPC,
            options: {
                url: '0.0.0.0:50051',
                package: 'orderService',
                protoPath: 'src/proto/order.proto',
            },
        });

    await app.listen();
}

main();