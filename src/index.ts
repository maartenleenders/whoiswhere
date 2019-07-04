import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as socketIo from "socket.io";
import {UserController} from "./user/user.controller";

const onConnect = app => socket => {
  console.log( "New connection: ", socket.id );
  socket.on( "clientReduxAction", ( action ) => handleReduxAction( action, socket, app ) );
};

async function handleReduxAction( action, socket, app ) {
  switch ( action.type ) {
    case "UPDATE_USER_BUILDING":
      // Strip emit from action to prevent infinite loop
      const { emit, ...strippedAction } = action;
      socket.broadcast.emit( "serverReduxAction", strippedAction );
      console.log( `TO DO: Should set user ${ action.userId } to ${ action.buildingId ? `building ${ action.buildingId }` : `'at the beach'` } in the database` );
      return;
    case "RETRIEVE_USERS":
      const users = await app.get( UserController ).getAll();
      const answerAction = {
        type: "USERS_RECEIVED",
        users,
      };
      socket.emit( "serverReduxAction", answerAction );
      return `Should send users object`;
    default:
      return action;
  }
};

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const io = socketIo( app.getHttpServer() );
  io.on( "connection", onConnect( app ) );
  await app.listen(3000);
}

bootstrap();
