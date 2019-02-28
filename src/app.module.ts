import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsController } from './buildings/buildings.controller';
import { EmployeesController } from './employees/employees.controller';
import { UsersController } from './users/users.controller';
import {UsersService} from "./users/users.service";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, BuildingsController, EmployeesController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
