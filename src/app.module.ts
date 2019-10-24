import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingController } from './buildings/building.controller';
import { EmployeeController } from './employees/employee.controller';
import {EmployeeService} from "./employees/employee.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import {Connection} from "typeorm";
import {Employee} from "./employees/employee.entity";
import {Building} from "./buildings/building.entity";
import {BuildingService} from "./buildings/building.service";
import {EventsGateway} from './events/events.gateway';
import {User} from "./users/user.entity";
import {UserController} from "./users/user.controller";
import {UserService} from "./users/user.service";

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      TypeOrmModule.forFeature( [ Employee, Building, User ] ),
  ],
  controllers: [AppController, BuildingController, EmployeeController, UserController],
  providers: [AppService, EmployeeService, BuildingService, UserService, EventsGateway],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
