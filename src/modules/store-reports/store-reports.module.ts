import { Module } from '@nestjs/common';

import { PrinterModule } from 'src/shared/printer/printer.module';
import { OrdersModule } from '../orders/orders.module';
import { StoreReportsController } from './store-reports.controller';
import { StoreReportsService } from './store-reports.service';

@Module({
  imports: [PrinterModule, OrdersModule],
  controllers: [StoreReportsController],
  providers: [StoreReportsService],
})
export class StoreReportsModule {}
