import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';
import { ReduxActionTypes } from "../types/reduxTypes";
import {UserService} from "../user/user.service";

@WebSocketGateway()
export class EventsGateway {
    constructor(
        private readonly userService: UserService,
    ) {}

    @WebSocketServer()
    server: Server;

    @SubscribeMessage('clientReduxAction')
    async handleReduxAction( client: Client, action: ReduxActionTypes ) {
        if ( action.type && action.type === "RETRIEVE_USERS" ) {
            const users = await this.userService.getAll();
            return {
                event: "serverReduxAction",
                data: {
                    type: "USERS_RECEIVED",
                    users,
            } };
        }
    }
}
