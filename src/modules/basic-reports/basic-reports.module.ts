import { Module } from '@nestjs/common';

import { PrinterModule } from 'src/shared/printer/printer.module';
import { CountriesModule } from '../countries/countries.module';
import { EmployeesModule } from '../employees/employees.module';
import { BasicReportsController } from './basic-reports.controller';
import { BasicReportsService } from './basic-reports.service';

@Module({
  imports: [PrinterModule, EmployeesModule, CountriesModule],
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
})
export class BasicReportsModule {}
