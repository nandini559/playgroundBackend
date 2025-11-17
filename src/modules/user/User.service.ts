// src/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/Create-User.dto';
import { PrismaService } from 'prisma/Prisma.service';
import { UpdateUserDto } from './dto/Update-User.dto';
// import { DeleteUserDto } from './dto/Delete-User.dto';
// import { CreateUserDto } from './dtos/Create-User.dto';
// import { UpdateUserDto } from './dtos/Update-User.dto';
// import { PrismaService } from 'prisma/Prisma.service';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

 async create(dto: CreateUserDto) {
  return this.prisma.user.create({
    data:dto as any
  });

  
}

async findAll(){
  return this.prisma.user.findMany();
}

async update(id:number, dto:UpdateUserDto){
return this.prisma.user.update({
  where: {id:id},
  data:dto as any,
}
);
}


// async delete(id:number, dto:DeleteUserDto){
// return this.prisma.user.delete({
//   where: {id:id},
//   data:dto as any,
// }
// );
// }

async delete(id: number) {
  return this.prisma.user.delete({
    where: { id },
  });
}



}