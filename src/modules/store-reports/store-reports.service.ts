import { Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import {
  getBasicChartSvgReport,
  getStatisticsReport,
  orderByIdReport,
} from 'src/reports';
import { PrinterService } from 'src/shared/printer/printer.service';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class StoreReportsService extends PrismaClient implements OnModuleInit {
  constructor(
    private readonly printerService: PrinterService,
    private readonly ordersService: OrdersService,
  ) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

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

  async getStoreStatistics() {
    const topCountriesByCustomerCount = await this.customer.groupBy({
      by: ['country'],
      _count: true,
      orderBy: { _count: { country: 'desc' } },
      take: 10,
    });
    const topCountries = topCountriesByCustomerCount.map((country) => ({
      country: country.country,
      customers: country._count,
    }));
    const docDefinition = await getStatisticsReport({ topCountries });
    return this.printerService.createPdf(docDefinition);
  }
}
