import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { StoreReportsService } from './store-reports.service';

@Controller('store-reports')
@ApiTags('Store Reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) {}

  @Get('orders/:orderId')
  @ApiOperation({ summary: 'Gets the report of an order by ID' })
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
}
