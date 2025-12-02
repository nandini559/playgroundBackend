import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/Create-Project.dto';
import { UpdateProjectDto } from './dto/Update-Project.dto';
// import { DeleteProjectDto } from './dto/Delete-Project.dto';

@ApiTags('project')
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  create(@Body() dto: CreateProjectDto) {
    return this.projectService.create(dto);
  }

  @Get('list')
  findAll () {
    return  this.projectService.findAll();
  }



  @Patch('update/:id')
update(@Param('id', ParseIntPipe) id: string, @Body() dto: UpdateProjectDto) {
  return this.projectService.update(id, dto);
}



@Delete(':id')
delete(@Param('id', ParseIntPipe) id: string) {
  return this.projectService.delete(id);
}


}