import { Injectable } from '@nestjs/common';

import { PrinterService } from 'src/shared/printer/printer.service';
import { EmployeesService } from '../employees/employees.service';
import {
  EmployeementLetterData,
  getCountriesReport,
  getEmploymentLetterReport,
  getHelloWorldReport,
} from './reports';
import { CountriesService } from '../countries/countries.service';

@Injectable()
export class BasicReportsService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly employeesService: EmployeesService,
    private readonly countriesService: CountriesService,
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

  async countriesReport() {
    const countries = await this.countriesService.findAll();
    const docDefinition = getCountriesReport(countries);
    return this.printerService.createPdf(docDefinition);
  }
}
