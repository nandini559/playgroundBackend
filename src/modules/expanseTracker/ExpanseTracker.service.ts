import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/Prisma.service";
import { CreateExpanseTrackerDto } from "./dto/Create-ExpanseTracker.dto";
import { UpdateExpanseTrackerDto } from "./dto/Update-ExpanseTracker.dto";


@Injectable()
export class ExpanseTrackerService {
  constructor(private prisma: PrismaService) {}

 async create(dto: CreateExpanseTrackerDto) {
  return this.prisma.expanseTracker.create({
    data:dto as any
  });

  
}

async findAll(){
  return this.prisma.expanseTracker.findMany(
  );
}

async findOne(id: any){
const expanseTracker= await this.prisma.expanseTracker.findUnique({
    where: {id}

});
if(!expanseTracker) throw new NotFoundException("expanse not found");
return expanseTracker;
}

async update(id:string, dto:UpdateExpanseTrackerDto){
return this.prisma.expanseTracker.update({
  where: {id:id},
  data:dto as any,
}
);
}


async delete(id: string) {
  return this.prisma.expanseTracker.delete({
    where: { id },
  });
}



}