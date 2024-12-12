import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/database/prisma/prisma.module';
import { PrinterModule } from 'src/shared/printer/printer.module';
import { StoreReportsController } from './store-reports.controller';
import { StoreReportsService } from './store-reports.service';

@Module({
  imports: [PrinterModule, PrismaModule],
  controllers: [StoreReportsController],
  providers: [StoreReportsService],
})
export class StoreReportsModule {}
