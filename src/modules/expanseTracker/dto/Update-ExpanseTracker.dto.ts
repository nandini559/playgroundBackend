import { IsEmail, IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateExpanseTrackerDto {


  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

@ApiProperty()
  @IsNotEmpty()
  education: string;

  @ApiProperty()
  @IsNotEmpty()
  links: string;

  @ApiProperty()
  @IsNotEmpty()
  projects: string;


}