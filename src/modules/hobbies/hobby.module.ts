import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/Prisma.service';
import { HobbyController } from './hobby.controller';
import { HobbyService } from './hobby.service';



@Module({
  controllers: [HobbyController],
  providers: [HobbyService, PrismaService],
})
export class HobbyModule {}