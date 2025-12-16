import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateHobbyDto } from './dto/Update-Hobby.dto';
import { HobbyService } from './hobby.service';
import { CreateHobbyDto } from './dto/Create-Hobby.dto';


@ApiTags('hobby')
@Controller('hobby')
export class HobbyController {
  constructor(private readonly hobbyService: HobbyService) {}

  @Post('create')
  create(@Body() dto: CreateHobbyDto) {
    return this.hobbyService.create(dto);
  }

  @Get('list')
  findAll () {
    return  this.hobbyService.findAll();
  }



  @Patch('update/:id')
update(@Param('id', ParseIntPipe) id: string, @Body() dto: UpdateHobbyDto) {
  return this.hobbyService.update(id, dto);
}



@Delete(':id')
delete(@Param('id', ParseIntPipe) id: string) {
  return this.hobbyService.delete(id);
}


}