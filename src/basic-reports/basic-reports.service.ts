import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';

import { PrismaService } from 'src/services/prisma.service';
import { getHelloWorldReport } from './reports';

@Injectable()
export class BasicReportsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly printerService: PrinterService,
  ) {}

  findAll() {
    return this.prismaService.employee.findMany();
  }

  helloWorld() {
    const docDefinition = getHelloWorldReport({ name: 'Pedro' });
    return this.printerService.createPdf(docDefinition);
  }
}
