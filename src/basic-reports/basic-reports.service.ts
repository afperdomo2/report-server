import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';

import { PrismaService } from 'src/services/prisma.service';
import { getEmploymentLetterReport, getHelloWorldReport } from './reports';

@Injectable()
export class BasicReportsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly printerService: PrinterService,
  ) {}

  helloWorld() {
    const docDefinition = getHelloWorldReport({ name: 'Pedro' });
    return this.printerService.createPdf(docDefinition);
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetterReport();
    return this.printerService.createPdf(docDefinition);
  }
}
