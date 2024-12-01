import { Controller, Get, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { BasicReportsService } from './basic-reports.service';

@Controller('basic-reports')
@ApiTags('Basic Reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @ApiOperation({ summary: 'Get a basic PDF' })
  @Get('hello-world')
  basicPdf(@Res() res: Response) {
    const pdfDoc = this.basicReportsService.helloWorld();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello World';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @ApiOperation({ summary: 'Get an employment letter' })
  @Get('employment-letter')
  employmentLetter(@Res() res: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Employment Letter';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }
}
