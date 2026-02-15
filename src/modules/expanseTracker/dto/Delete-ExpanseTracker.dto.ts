import {IsEmail, IsNotEmpty, IsOptional, IsString, IsEnum} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class DeleteExpanseTrackerDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}
