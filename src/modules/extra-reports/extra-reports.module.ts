import { Module } from '@nestjs/common';
import { PrinterModule } from 'src/shared/printer/printer.module';
import { ExtraReportsController } from './extra-reports.controller';
import { ExtraReportsService } from './extra-reports.service';

@Module({
  imports: [PrinterModule],
  controllers: [ExtraReportsController],
  providers: [ExtraReportsService],
})
export class ExtraReportsModule {}
