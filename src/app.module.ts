import { Module } from '@nestjs/common';

import { PrismaModule } from './database/prisma/prisma.module';
import { BasicReportsModule } from './modules/basic-reports/basic-reports.module';
import { CountriesModule } from './modules/countries/countries.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { StoreReportsModule } from './modules/store-reports/store-reports.module';
import { PrinterModule } from './shared/printer/printer.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [
    BasicReportsModule,
    PrinterModule,
    PrismaModule,
    EmployeesModule,
    CountriesModule,
    StoreReportsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
