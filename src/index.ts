import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {bootstrap} from './bootstrap-nestjs';

createConnection().then(async ( connection ) => {

    if ( connection ) {
        bootstrap();
    } else {
        console.error( "No connection" );
    }
}).catch(error => console.log(error));
