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
      const userName = `${ data.user.firstName } ${ data.user.lastName }`;
      const logString = data.buildingId ? `${ userName } changed to building #${ data.buildingId }.` : `${ userName } checked out! Later!`;
      console.log( logString );
    } );
  } );
  await app.listen(3000);
}

bootstrap();
