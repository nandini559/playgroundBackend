import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/Prisma.service';
import { CreateProjectDto } from './dto/Create-Project.dto';
import { UpdateProjectDto } from './dto/Update-Project.dto';


@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

 async create(dto: CreateProjectDto) {
  return this.prisma.project.create({
    data:dto as any
  });

  
}

async findAll(){
  return this.prisma.project.findMany();
}

async update(id:number, dto:UpdateProjectDto){
return this.prisma.project.update({
  where: {id:id},
  data:dto as any,
}
);
}




async delete(id: number) {
  return this.prisma.project.delete({
    where: { id },
  });
}



}