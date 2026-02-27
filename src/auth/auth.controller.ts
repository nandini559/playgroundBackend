import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";

import type { Request } from "express";

interface RequestWithUser extends Request {
  user: any;
}

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  // 🔐 GET LOGGED IN USER
  @UseGuards(JwtAuthGuard)
  @Get("me")
  getMe(@Req() req: RequestWithUser) {
    return req.user;
  }

  // 🟣 REGISTER
  @Post("register")
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(
      registerDto.email,
      registerDto.password
    );
  }

  // 🟣 LOGIN → RETURN TOKEN ONLY
  @Post("login")
  async login(@Body() dto: LoginDto) {
    const { access_token, user } =
      await this.authService.login(dto.email, dto.password);

    return {
      access_token,
      user
    };
  }

  // 🟣 LOGOUT
  @Post("logout")
  logout() {
    return { message: "Logged out successfully" };
  }
}
