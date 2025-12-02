// src/user/user.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './User.service';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dtos/Create-User.dto';
// import { UpdateUserDto } from './dtos/Update-User.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/Create-User.dto';
import { UpdateUserDto } from './dto/Update-User.dto';
// import { DeleteUserDto } from './dto/Delete-User.dto';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get('list')
  findAll () {
    return  this.userService.findAll();
  }

  @Get(':id')
  findOne (@Param('id') id: string ) {
    return  this.userService.findOne(id);
  }


  @Patch('update/:id')
update(@Param('id', ParseIntPipe) id: string, @Body() dto: UpdateUserDto) {
  return this.userService.update(id, dto);
}



@Delete(':id')
delete(@Param('id', ParseIntPipe) id: string) {
  return this.userService.delete(id);
}


}