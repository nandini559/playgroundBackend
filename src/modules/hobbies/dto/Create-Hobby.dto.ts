import { IsEmail, IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHobbyDto {


  @ApiProperty()
  @IsNotEmpty()
  goals: string;

  @ApiProperty()
  @IsEmail()
  description: string;

   @ApiProperty()
  @IsEmail()
  userId: string;


   name: string;
  
 


}