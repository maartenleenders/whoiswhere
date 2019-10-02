export const UPDATE_USER_BUILDING = "UPDATE_USER_BUILDING";

export const RETRIEVE_USERS = "RETRIEVE_USERS";
export const INCOMING_USERS = "INCOMING_USERS";

export const NEW_USER_REQUEST = "NEW_USER_REQUEST";
export const NEW_USER_CREATED = "NEW_USER_CREATED";

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

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

export function newUserRequest( firstName, lastName ) {
	return {
		type: NEW_USER_REQUEST,
		user: {
			firstName,
			lastName,
		},
		emit: true,
	}
}

export function newUserCreated( user ) {
	return {
		type: NEW_USER_CREATED,
		user,
		emit: true,
	}
}

export function deleteUserRequest_legacy( userId ) {
	return {
		type: DELETE_USER_REQUEST,
		userId,
		emit: true,
	}
}

export function deleteUserRequest( userId ) {
	const Http = new XMLHttpRequest();
	const url = `http://localhost:3000/user/${userId}/delete`;
	Http.open( "POST", url );
	Http.send();

	Http.onreadystatechange = () => {
		console.log( Http.responseText );
	};
	return {
		type: DELETE_USER_REQUEST,
		userId,
		emit: false,
	}
}
