import { IsEmail, IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {


  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsEmail()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  skills: string;

  @ApiProperty()
  @IsNotEmpty()
  link: string;

 


}