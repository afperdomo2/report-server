import { Module } from '@nestjs/common';

import { PrinterModule } from 'src/printer/printer.module';
import { PrismaService } from 'src/services/prisma.service';
import { BasicReportsController } from './basic-reports.controller';
import { BasicReportsService } from './basic-reports.service';

@Module({
  imports: [PrinterModule],
  controllers: [BasicReportsController],
  providers: [BasicReportsService, PrismaService],
})
export class BasicReportsModule {}
