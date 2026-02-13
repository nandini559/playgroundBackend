import {Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {PrismaService} from "prisma/Prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private prisma : PrismaService, private jwtService : JwtService) {}

  async register(email : string, password : string) {
    const existingUser = await this.prisma.user.findUnique({where: {
        email
      }});

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: "Nandini" // or make it dynamic
      }
    });

    return {message: "User registered successfully"};
  }

  async login(email : string, password : string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      },
      select: {
        id: true,
        email: true,
        password: true
      }
    });

    if (!user || !user.password) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload = {
      sub: user.id,
      email: user.email
    };

    const token = this.jwtService.sign(payload);

    return {access_token: token};
  }

  async logout() {
    return {message: "Logout successful (delete token on frontend)"};
  }
}
