import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class CountriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.country.findMany({
      where: { localName: { not: null } },
    });
  }
}
