import { ApiProperty } from '@nestjs/swagger';
import { Continent } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';

const stringifiedContinents = Object.values(Continent)
  .filter((value) => typeof value === 'string')
  .join(', ');

export class FilterCountriesDto {
  @ApiProperty({
    required: false,
    description: 'Filter by continent',
  })
  @IsEnum(Continent, {
    message: `Continent must be one of the following values: ${stringifiedContinents}`,
  })
  @IsOptional()
  continent?: Continent;
}
