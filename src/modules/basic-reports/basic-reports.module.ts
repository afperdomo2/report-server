import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { PrinterModule } from 'src/modules/printer/printer.module';
import { BasicReportsController } from './basic-reports.controller';
import { BasicReportsService } from './basic-reports.service';

@Module({
  imports: [PrinterModule, PrismaModule],
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
})
export class BasicReportsModule {}
