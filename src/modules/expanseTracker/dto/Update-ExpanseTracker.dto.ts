import {IsEmail, IsNotEmpty, IsOptional, IsString, IsEnum} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Category} from "@prisma/client";

export class UpdateExpanseTrackerDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({enum: Category})
  @IsEnum(Category)
  category: Category;

  @ApiProperty()
  @IsNotEmpty()
  date: Date;
}
