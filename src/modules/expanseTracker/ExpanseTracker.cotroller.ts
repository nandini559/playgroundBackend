import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {ExpanseTrackerService} from "./ExpanseTracker.service";
import {CreateExpanseTrackerDto} from "./dto/Create-ExpanseTracker.dto";
import {UpdateExpanseTrackerDto} from "./dto/Update-ExpanseTracker.dto";

@ApiTags("ExpanseTracker")
@Controller("expanseTracker")
export class ExpanseTrackerController {
  constructor(private readonly expanseTrackerService : ExpanseTrackerService) {}

  @Post("create")
  create(@Body()dto : CreateExpanseTrackerDto) {
    return this.expanseTrackerService.create(dto);
  }

  @Get("list")
  findAll() {
    return this.expanseTrackerService.findAll();
  }

  @Get(":id")
  findOne(@Param("id")id : string) {
    return this.expanseTrackerService.findOne(id);
  }

  @Patch("update/:id")
  update(@Param("id")id : string, @Body()dto : UpdateExpanseTrackerDto) {
    return this.expanseTrackerService.update(id, dto);
  }
  @Delete(":id")
  delete(@Param("id")id : string) {
    return this.expanseTrackerService.delete(id);
  }
}
