import { Controller, Get } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('basic-reports')
@ApiTags('Basic Reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @ApiOperation({ summary: 'Get all basic reports' })
  @Get()
  findAll() {
    return this.basicReportsService.findAll();
  }
}
