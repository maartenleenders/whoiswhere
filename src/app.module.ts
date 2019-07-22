import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingController } from './buildings/building.controller';
import { UserController } from './user/user.controller';
import {UserService} from "./user/user.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import {Connection} from "typeorm";
import {User} from "./user/user.entity";
import {Building} from "./buildings/building.entity";
import {BuildingService} from "./buildings/building.service";
import {EventsGateway} from './events/events.gateway';

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      TypeOrmModule.forFeature( [ User, Building ] ),
  ],
  controllers: [AppController, BuildingController, UserController],
  providers: [AppService, UserService, BuildingService, EventsGateway],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
