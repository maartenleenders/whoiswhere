import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsController } from './controllers/buildings/buildings.controller';
import { EmployeesController } from './controllers/employees/employees.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, BuildingsController, EmployeesController, UsersController],
  providers: [AppService],
})
export class AppModule {}
