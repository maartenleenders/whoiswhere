import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';
import {UserService} from "../user/user.service";
import {
    RetrieveUsersAction,
    UpdateUserBuildingAction,
} from "../types/reduxTypes";
import { wrapReduxResponse } from "../helpers/gatewayEventHandlerHelpers";

@WebSocketGateway()
export class EventsGateway {
    constructor(
        private readonly userService: UserService,
    ) {}

    @WebSocketServer()
    server: Server;

    @SubscribeMessage( "RETRIEVE_USERS" )
    async retrieveUsers( client: Client, action: RetrieveUsersAction ) {
        const users = await this.userService.getAll();
        return wrapReduxResponse( {
                type: "INCOMING_USERS",
                users,
        } );
    }

    @SubscribeMessage( "UPDATE_USER_BUILDING" )
    async updateUserBuilding( client: Client, action: UpdateUserBuildingAction ) {
        await this.userService.setBuilding( action.userId, action.buildingId );
        client.broadcast.emit(
            wrapReduxResponse(
                {
                    type: "UPDATE_USER_BUILDING",
                    userId: action.userId,
                    buildingId: action.buildingId,
                },
            ),
        );
    }
}
