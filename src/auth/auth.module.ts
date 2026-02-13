import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./jwt.strategy";
import {Module} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {PrismaModule} from "../prisma/prisma.module";
import {AuthController} from "./auth.controller";
@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: "your-secret-key",
      signOptions: {
        expiresIn: "1h"
      }
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService, JwtStrategy
  ],
  exports: [AuthService]
})
export class AuthModule {}
