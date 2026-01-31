import { IsEmail, IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHobbyDto } from './Create-Hobby.dto';

export class UpdateHobbyDto extends PartialType(CreateHobbyDto){


  @ApiProperty()
  @IsNotEmpty()
  goals: string;

  @ApiProperty()
  @IsEmail()
  description: string;

 
 



}