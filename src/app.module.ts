import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingController } from './building/building.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Connection} from "typeorm";
import {Employee} from "./employee/employee.entity";
import {Building} from "./building/building.entity";
import {BuildingService} from "./building/building.service";
import {User} from "./user/user.entity";
import {UserController} from "./user/user.controller";
import {UserService} from "./user/user.service";
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      TypeOrmModule.forFeature( [ Employee, Building, User ] ),
      EmployeeModule,
  ],
  controllers: [AppController, BuildingController , UserController],
  providers: [AppService , BuildingService, UserService ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
