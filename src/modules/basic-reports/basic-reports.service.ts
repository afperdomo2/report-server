import { Injectable, NotFoundException } from '@nestjs/common';
import { PrinterService } from 'src/modules/printer/printer.service';

import { PrismaService } from 'src/modules/prisma/prisma.service';
import {
  EmployeementLetterData,
  getEmploymentLetterReport,
  getHelloWorldReport,
} from './reports';

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
    const data: EmployeementLetterData = {
      employeer: {
        name: 'Pedro Perez',
        position: 'Líder de RR.HH.',
        company: "Tucan's Company",
      },
      employee,
    };
    const docDefinition = getEmploymentLetterReport(data);
    return this.printerService.createPdf(docDefinition);
  }

  async getEmployeeById(employeeId: number) {
    const employee = await this.prismaService.employee.findUnique({
      where: { id: employeeId },
    });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }
}
