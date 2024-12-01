import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.employee.findMany();
  }

  async findById(id: number) {
    const employee = await this.prismaService.employee.findUnique({
      where: { id },
    });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }
}
