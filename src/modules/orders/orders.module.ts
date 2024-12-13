import { Module } from '@nestjs/common';

import { OrdersService } from './orders.service';

@Module({
  imports: [],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
