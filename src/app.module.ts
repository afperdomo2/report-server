import { Module } from '@nestjs/common';

import { PrismaModule } from './database/prisma/prisma.module';
import { BasicReportsModule } from './modules/basic-reports/basic-reports.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { PrinterModule } from './shared/printer/printer.module';
import { CountriesModule } from './modules/countries/countries.module';

@Module({
  imports: [BasicReportsModule, PrinterModule, PrismaModule, EmployeesModule, CountriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
