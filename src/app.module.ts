import { Module } from '@nestjs/common';

import { BasicReportsModule } from './modules/basic-reports/basic-reports.module';
import { PrinterModule } from './modules/printer/printer.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [BasicReportsModule, PrinterModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
