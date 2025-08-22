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
    pdfDoc.info.Title = 'Html Report';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('community-report')
  @ApiOperation({ summary: 'Get a community report PDF' })
  async getCommunityReport(@Res() res: Response) {
    const pdfDoc = this.extraReportsService.generateCommunityReport();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Community Report';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('custom-size')
  @ApiOperation({ summary: 'Get a custom size PDF from HTML' })
  async getCustomSizeReport(@Res() res: Response) {
    const pdfDoc = this.extraReportsService.generateCustomSizeReport();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Custom Size Report';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }
}
