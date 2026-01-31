import { Module } from "@nestjs/common";
import { PrismaService } from "prisma/Prisma.service";
import { ExpanseTrackerService } from "./ExpanseTracker.service";
import { ExpanseTrackerController } from "./ExpanseTracker.cotroller";

@Module({
  controllers: [ExpanseTrackerController],
  providers: [ExpanseTrackerService, PrismaService],
})
export class ExpanseTrackerModule {}