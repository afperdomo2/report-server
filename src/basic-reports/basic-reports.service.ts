import { Injectable, NotFoundException } from '@nestjs/common';
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

  async employmentLetter(employeeId: number) {
    const employee = await this.getEmployeeById(employeeId);
    const docDefinition = getEmploymentLetterReport();
    return this.printerService.createPdf(docDefinition);
  }

  async getEmployeeById(employeeId: number) {
    const employee = await this.prismaService.employee.findUnique({
      where: { id: employeeId },
    });
    console.log(
      '🚀 ~ BasicReportsService ~ getEmployeeById ~ employee:',
      employee,
    );
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }
}
