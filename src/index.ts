import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {User} from './entities/User';
import {bootstrap} from './bootstrap-nestjs';

createConnection().then(async ( connection ) => {

    if ( connection ) {
        bootstrap();
    } else {
        console.error( "yo mamma got no connect" );
    }
}).catch(error => console.log(error));
