import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/User.module';
import { ProjectModule } from './modules/projects/project.module';
import { ProjectController } from './modules/projects/project.controller';
import { ProjectService } from './modules/projects/project.service';
import { HobbyModule } from './modules/hobbies/hobby.module';
import { ExpanseTrackerModule } from './modules/expanseTracker/ExpanseTracker.module';

@Module({
  imports: [UserModule, ProjectModule, HobbyModule, ExpanseTrackerModule],
  controllers: [AppController],
  providers: [AppService],
})




export class AppModule {}
