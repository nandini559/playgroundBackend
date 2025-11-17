import { IsEmail, IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto {


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
  links: string;

 



}