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

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      TypeOrmModule.forFeature( [ Employee, Building ] ),
  ],
  controllers: [AppController, BuildingController, EmployeeController],
  providers: [AppService, EmployeeService, BuildingService, EventsGateway],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
