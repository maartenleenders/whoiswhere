export const RETRIEVE_USERS = 'RETRIEVE_USERS';
export const INCOMING_USERS = 'INCOMING_USERS';

export const UPDATE_USER_BUILDING = 'UPDATE_USER_BUILDING';

export const NEW_USER_REQUEST = 'NEW_USER_REQUEST';
export const NEW_USER_CREATED = 'NEW_USER_CREATED';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

interface RetrieveUsersActionType {
    type: typeof RETRIEVE_USERS;
}

interface UpdateUserBuildingActionType {
    type: typeof UPDATE_USER_BUILDING;
    buildingId: string;
    userId: string;
}

interface NewUserRequestActionType {
    type: typeof NEW_USER_REQUEST;
    user: object;
}

interface DeleteUserRequestActionType {
    type: typeof DELETE_USER_REQUEST;
    userId: string;
}

export type RetrieveUsersAction = RetrieveUsersActionType;
export type UpdateUserBuildingAction = UpdateUserBuildingActionType;
export type NewUserRequestAction = NewUserRequestActionType;
export type DeleteUserRequestAction = DeleteUserRequestActionType;
