import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsPositive } from 'class-validator';

export class PageQuery {
  @ApiProperty({ description: 'Current page number' })
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  pageNumber!: number;

  @ApiProperty({ description: 'Size of one page' })
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  pageSize!: number;

  getOffset(): number {
    return (+this.pageNumber - 1) * +this.pageSize;
  }

  getLimit(): number {
    return +this.pageSize;
  }
}
