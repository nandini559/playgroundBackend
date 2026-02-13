import {Module} from "@nestjs/common";
import {PrismaService} from "prisma/Prisma.service";

@Module({
  providers: [PrismaService], exports: [PrismaService] // 🔥 VERY IMPORTANT
})
export class PrismaModule {}
