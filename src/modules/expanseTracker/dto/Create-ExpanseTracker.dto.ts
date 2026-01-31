import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateExpanseTrackerDto {
  
    @ApiProperty()
    @IsNotEmpty()
  title: string;

  
  @ApiProperty()
  @IsNotEmpty()
  amount: number;

  
  @ApiProperty({ enum: Category })
  @IsEnum(Category)
  category: Category;
  
  @ApiProperty()
  @IsNotEmpty()
  date: Date;
}
