import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as socketIo from "socket.io";

const onConnect = ( socket ) => {
  console.log( "New connection: ", socket.id );
  socket.on( "clientReduxAction", ( action ) => handleReduxAction( action, socket ) );
};

const handleReduxAction = ( action, socket ) => {
  switch ( action.type ) {
    case "UPDATE_USER_BUILDING":
      console.log( action );
      // Strip emit from action to prevent infinite loop
        const { emit, ...strippedAction } = action;
      socket.broadcast.emit( "serverReduxAction", strippedAction );
      return `Should set user ${ action.userId } to ${ action.buildingId ? `building ${ action.buildingId }` : `'at the beach'.` }`;
    case "RETRIEVE_USERS":
      console.log( action );
      return `Should send users object`;
    default:
      return action;
  }
};

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const io = socketIo( app.getHttpServer() );
  io.on( "connection", onConnect );

  await app.listen(3000);
}

bootstrap();
