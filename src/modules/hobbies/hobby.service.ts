import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/Prisma.service';
// import { CreateHobbyDto } from './dto/create-Hobby.dto';
import { UpdateHobbyDto } from './dto/Update-Hobby.dto';
import { CreateHobbyDto } from './dto/Create-Hobby.dto';

@Injectable()
export class HobbyService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateHobbyDto) {
    return this.prisma.hobby.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.hobby.findMany();
  }

  async update(id: string, dto: UpdateHobbyDto) {
    return this.prisma.hobby.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: string) {
    return this.prisma.hobby.delete({
      where: { id },
    });
  }
}
