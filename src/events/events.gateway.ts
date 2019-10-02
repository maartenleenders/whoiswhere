import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import {Client, Server} from 'socket.io';
import {UserService} from "../user/user.service";
import {
    NewUserRequestAction,
    RetrieveUsersAction,
    UpdateUserBuildingAction,
    DeleteUserRequestAction,
    NEW_USER_CREATED,
    RETRIEVE_USERS,
    UPDATE_USER_BUILDING,
    INCOMING_USERS,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    NEW_USER_REQUEST,
} from "../types/reduxTypes";

@WebSocketGateway()
export class EventsGateway {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    @WebSocketServer()
    server: Server;

    @SubscribeMessage(RETRIEVE_USERS)
    async retrieveUsers(client: Client, action: RetrieveUsersAction) {
        const users = await this.userService.getAll();
        client.emit("serverReduxAction", {type: INCOMING_USERS, users});
    }

    @SubscribeMessage(UPDATE_USER_BUILDING)
    async updateUserBuilding(client: Client, action: UpdateUserBuildingAction) {
        await this.userService.setBuilding(action.userId, action.buildingId);
        client.broadcast.emit("serverReduxAction", {
                type: UPDATE_USER_BUILDING,
                userId: action.userId,
                buildingId: action.buildingId,
            },
        );
    }

    @SubscribeMessage(NEW_USER_REQUEST)
    async createUser(client: Client, action: NewUserRequestAction) {
        const user = await this.userService.create(action.user);
        this.server.emit("serverReduxAction", {
            type: NEW_USER_CREATED,
            user,
        });
    }

    @SubscribeMessage(DELETE_USER_REQUEST)
    async deleteUser(client: Client, action: DeleteUserRequestAction) {
        await this.userService.delete(action.userId);
        this.server.emit("serverReduxAction", {
            type: DELETE_USER_SUCCESS,
            userId: action.userId,
        } );
    }
}
