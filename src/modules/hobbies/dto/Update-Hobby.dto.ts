import { IsEmail, IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateHobbyDto {


  @ApiProperty()
  @IsNotEmpty()
  goals: string;

  @ApiProperty()
  @IsEmail()
  description: string;

 
 



}