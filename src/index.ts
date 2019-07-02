import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as socketIo from "socket.io";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const io = socketIo( app.getHttpServer() );
  io.on( "connection", ( socket ) => {
    console.log( "New connection: ", socket.id );

    socket.on( "buildingChange", ( data ) => {
      const logString = data.buildingId ? `${ data.userId } changed to building #${ data.buildingId }.` : `${ data.userId } checked out! Later!`;
      io.sockets.emit( "buildingChange", data );
      console.log( logString );
    } );
  } );

  await app.listen(3000);
}

bootstrap();
