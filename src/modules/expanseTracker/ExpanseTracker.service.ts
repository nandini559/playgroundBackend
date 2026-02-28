import {Injectable, NotFoundException} from "@nestjs/common";
import {PrismaService} from "prisma/Prisma.service";
import {CreateExpanseTrackerDto} from "./dto/Create-ExpanseTracker.dto";
import {UpdateExpanseTrackerDto} from "./dto/Update-ExpanseTracker.dto";

@Injectable()
export class ExpanseTrackerService {
  constructor(private prisma : PrismaService) {}

  async createExpense(userId : string, dto : CreateExpanseTrackerDto) {
    return this.prisma.expanseTracker.create({
      data: {
        title: dto.title,
        amount: dto.amount,
        category: dto.category,
        date: dto.date,
        userId: userId
      }
    });
  }

  async findAll(userId : string) {
    return this.prisma.expanseTracker.findMany({
      where: {
        userId: userId
      }
    });
  }

  async findOne(userId : string, id : string) {
    const expense = await this.prisma.expanseTracker.findFirst({
      where: {
        id,
        userId // 🔥 ownership check
      }
    });

    if (!expense) {
      throw new NotFoundException("Expense not found");
    }

    return expense;
  }

  async update(userId : string, id : string, dto : UpdateExpanseTrackerDto) {
    const expense = await this.prisma.expanseTracker.findFirst({
      where: {
        id,
        userId
      }
    });

    if (!expense) {
      throw new NotFoundException("Expense not found");
    }

    return this.prisma.expanseTracker.update({
      where: {
        id
      },
      data: {
        title: dto.title,
        amount: dto.amount,
        category: dto.category,
        date: dto.date
      }
    });
  }

  async delete(userId : string, id : string) {
    const expense = await this.prisma.expanseTracker.findFirst({
      where: {
        id,
        userId
      }
    });

    if (!expense) {
      throw new NotFoundException("Expense not found");
    }

    return this.prisma.expanseTracker.delete({where: {
        id
      }});
  }
}
