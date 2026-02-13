import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class RegisterDto {
  @ApiProperty({example: "nandini@gmail.com"})
  @IsEmail()
  email: string;

  @ApiProperty({example: "12345678"})
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
