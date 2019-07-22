export const RETRIEVE_USERS = 'RETRIEVE_USERS';
export const UPDATE_USER_BUILDING = 'UPDATE_USER_BUILDING';

interface RetrieveUsersActionType {
    type: typeof RETRIEVE_USERS;
}

interface UpdateUserBuildingActionType {
    type: typeof UPDATE_USER_BUILDING;
    buildingId: string;
    userId: string;
}

export type RetrieveUsersAction = RetrieveUsersActionType;
export type UpdateUserBuildingAction = UpdateUserBuildingActionType;
