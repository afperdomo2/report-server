import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class BasicReportsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.employee.findMany();
  }
}
