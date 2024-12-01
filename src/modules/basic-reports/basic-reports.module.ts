import { Module } from '@nestjs/common';

import { PrinterModule } from 'src/modules/printer/printer.module';
import { EmployeesModule } from '../employees/employees.module';
import { BasicReportsController } from './basic-reports.controller';
import { BasicReportsService } from './basic-reports.service';

@Module({
  imports: [PrinterModule, EmployeesModule],
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
})
export class BasicReportsModule {}
