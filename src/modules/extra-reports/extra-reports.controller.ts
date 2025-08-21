import { Response } from 'express';

import { Controller, Get, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ExtraReportsService } from './extra-reports.service';

@Controller('extra-reports')
@ApiTags('extra-reports')
export class ExtraReportsController {
  constructor(private readonly extraReportsService: ExtraReportsService) {}

  @Get('html-report')
  @ApiOperation({ summary: 'Get a basic PDF from HTML' })
  async getHtmlReport(@Res() res: Response) {
    const pdfDoc = this.extraReportsService.generateHtmlReport();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello World';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }
}
