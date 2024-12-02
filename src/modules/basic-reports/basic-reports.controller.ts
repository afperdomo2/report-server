import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { BasicReportsService } from './basic-reports.service';

@Controller('basic-reports')
@ApiTags('Basic Reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get('hello-world')
  @ApiOperation({ summary: 'Get a basic PDF' })
  basicPdf(@Res() res: Response) {
    const pdfDoc = this.basicReportsService.helloWorld();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hello World';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('employment-letter/:employeeId')
  @ApiOperation({ summary: 'Get an employment letter' })
  async employmentLetter(
    @Res() res: Response,
    @Param('employeeId', ParseIntPipe) employeeId: number,
  ) {
    const pdfDoc = await this.basicReportsService.employmentLetter(employeeId);
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Employment Letter';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('countries')
  @ApiOperation({ summary: 'Get a report of countries' })
  async countriesReport(@Res() res: Response) {
    const pdfDoc = await this.basicReportsService.countriesReport();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Countries';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }
}
