export const UPDATE_USER_BUILDING = "UPDATE_USER_BUILDING";
export const RETRIEVE_USERS = "RETRIEVE_USERS";

export function updateUserBuilding( userId, buildingId ) {
	return {
		type: UPDATE_USER_BUILDING,
		userId,
		buildingId,
		emit: true,
	}
};

export function retrieveUsers() {
	return {
		type: RETRIEVE_USERS,
		emit: true,
	}
}
