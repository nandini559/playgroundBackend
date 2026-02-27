import {Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {PrismaService} from "prisma/Prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private prisma : PrismaService, private jwtService : JwtService) {}

  // 🔹 REGISTER
  async register(email : string, password : string) {
    const existingUser = await this.prisma.user.findUnique({where: {
        email
      }});

    if (existingUser) {
      throw new UnauthorizedException("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: "Nandini" // make dynamic later if needed
      }
    });

    return {message: "User registered successfully"};
  }

  // 🔹 LOGIN
  async login(email : string, password : string) {
    const user = await this.prisma.user.findUnique({where: {
        email
      }});

    if (!user || !user.password) {
      throw new UnauthorizedException("Invalid Credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload = {
      sub: user.id,
      email: user.email
    };

    const access_token = this.jwtService.sign(payload);

    //  Remove password before returning
    const {
      password: _,
      ...safeUser
    } = user;

    return {access_token, user: safeUser};
  }

  // 🔹 LOGOUT
  async logout() {
    return {message: "Logout successful"};
  }

  // 🔹 GET PROFILE
  async getProfile(userId : string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const {
      password: _,
      ...safeUser
    } = user;

    return safeUser;
  }
}
