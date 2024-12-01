import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/database/prisma/prisma.module';
import { EmployeesService } from './employees.service';

@Module({
  imports: [PrismaModule],
  providers: [EmployeesService],
  exports: [EmployeesService],
})
export class EmployeesModule {}
