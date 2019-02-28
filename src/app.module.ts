import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsController } from './buildings/buildings.controller';
import { EmployeesController } from './employees/employees.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, BuildingsController, EmployeesController, UsersController],
  providers: [AppService],
})
export class AppModule {}
