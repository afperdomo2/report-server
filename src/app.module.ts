import { Module } from '@nestjs/common';

import { BasicReportsModule } from './modules/basic-reports/basic-reports.module';
import { PrinterModule } from './modules/printer/printer.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [BasicReportsModule, PrinterModule, PrismaModule, EmployeesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
