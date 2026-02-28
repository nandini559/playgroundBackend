import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards
} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {ApiTags} from "@nestjs/swagger";
import {ExpanseTrackerService} from "./ExpanseTracker.service";
import {CreateExpanseTrackerDto} from "./dto/Create-ExpanseTracker.dto";
import {UpdateExpanseTrackerDto} from "./dto/Update-ExpanseTracker.dto";

@ApiTags("ExpanseTracker")
@Controller("expanseTracker")
@UseGuards(AuthGuard("jwt")) // 🔥 apply once here
export class ExpanseTrackerController {
  constructor(private readonly expanseTrackerService : ExpanseTrackerService) {}

  @Post()
  create(@Req()req, @Body()dto : CreateExpanseTrackerDto) {
    return this.expanseTrackerService.createExpense(req.user.userId, dto);
  }

  @Get("list")
  findAll(@Req()req) {
    return this.expanseTrackerService.findAll(req.user.userId);
  }

  @Get(":id")
  findOne(@Req()req, @Param("id")id : string) {
    return this.expanseTrackerService.findOne(req.user.userId, id);
  }

  @Patch("update/:id")
  update(@Req()req, @Param("id")id : string, @Body()dto : UpdateExpanseTrackerDto) {
    return this.expanseTrackerService.update(req.user.userId, id, dto);
  }

  @Delete(":id")
  delete(@Req()req, @Param("id")id : string) {
    return this.expanseTrackerService.delete(req.user.userId, id);
  }
}
