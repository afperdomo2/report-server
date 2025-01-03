import { Injectable } from '@nestjs/common';

import { getBasicChartSvgReport, orderByIdReport } from 'src/reports';
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
    // console.log(JSON.stringify(order, null, 2));
    const docDefinition = orderByIdReport({ order: order as any });
    return this.printerService.createPdf(docDefinition);
  }

  async getSvgChart() {
    const docDefinition = await getBasicChartSvgReport();
    return this.printerService.createPdf(docDefinition);
  }
}
