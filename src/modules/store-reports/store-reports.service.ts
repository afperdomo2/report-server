import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { getHelloWorldReport } from 'src/reports';

import { PrinterService } from 'src/shared/printer/printer.service';

@Injectable()
export class StoreReportsService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly prismaService: PrismaService,
  ) {}

  async orderByIdReport(orderId: number) {
    const docDefinition = getHelloWorldReport({ name: `Order ${orderId}` });
    return this.printerService.createPdf(docDefinition);
  }
}
