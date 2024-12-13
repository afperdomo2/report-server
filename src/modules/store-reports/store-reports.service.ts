import { Injectable } from '@nestjs/common';
import { orderByIdReport } from 'src/reports';

import { PrinterService } from 'src/shared/printer/printer.service';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class StoreReportsService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly ordersService: OrdersService,
  ) {}

  async orderByIdReport(orderId: number) {
    const order = await this.ordersService.findById(orderId);
    // console.log('🚀 ~ StoreReportsService ~ orderByIdReport ~ order:', order);

    const docDefinition = orderByIdReport({ data: order });
    return this.printerService.createPdf(docDefinition);
  }
}
