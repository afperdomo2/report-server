import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/modules/printer/printer.service';

import { EmployeesService } from '../employees/employees.service';
import {
  EmployeementLetterData,
  getEmploymentLetterReport,
  getHelloWorldReport,
} from './reports';

@Injectable()
export class BasicReportsService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly employeesService: EmployeesService,
  ) {}

  helloWorld() {
    const docDefinition = getHelloWorldReport({ name: 'Pedro' });
    return this.printerService.createPdf(docDefinition);
  }

  async employmentLetter(employeeId: number) {
    const employee = await this.employeesService.findById(employeeId);
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
}
