import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiParam } from '@nestjs/swagger';
import { Response } from 'express';

import { StoreReportsService } from './store-reports.service';

@Controller('store-reports')
@ApiTags('Store Reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) {}

  @Get('orders/:orderId')
  @ApiOperation({ summary: 'Gets the report of an order by ID' })
  @ApiParam({
    name: 'orderId',
    type: 'number',
    required: true,
    description: 'The ID of the order',
    example: 10_248,
  })
  async getStoreReportsByOrderId(
    @Res() res: Response,
    @Param('orderId', ParseIntPipe) orderId: number,
  ) {
    const pdfDoc = await this.storeReportsService.orderByIdReport(orderId);
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Order by ID Report';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('svgs-charts')
  @ApiOperation({ summary: 'Gets the report of a SVG chart' })
  async getSvgChart(@Res() res: Response) {
    const pdfDoc = await this.storeReportsService.getSvgChart();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Svg-chart-report';
    pdfDoc.pipe(res);
    pdfDoc.end();
  }
}
