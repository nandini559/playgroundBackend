// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { PrismaService } from 'prisma/Prisma.service';
import { UserController } from './User.controller';
// import { UserController } from './user.controller';
// import { PrismaService } from 'prisma/Prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}