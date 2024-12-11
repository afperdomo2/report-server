import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma/prisma.service';
import { FilterCountriesDto } from '../basic-reports/dto/filter-countries.dto';

@Injectable()
export class CountriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(filters: FilterCountriesDto) {
    const where = { localName: { not: null } };
    if (filters.continent) {
      where['continent'] = filters.continent;
    }
    return this.prismaService.country.findMany({ where });
  }
}
