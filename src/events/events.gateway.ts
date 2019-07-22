import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';
import { ReduxActionTypes } from "../types/reduxTypes";

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('clientReduxAction')
    handleReduxAction( client: Client, action: ReduxActionTypes ) {
        if ( action.type && action.type === "RETRIEVE_USERS" ) {
            console.log( "data", action );
        }
    }
}
