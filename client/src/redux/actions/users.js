export const UPDATE_USER_BUILDING = "UPDATE_USER_BUILDING";
export const RETRIEVING_USERS = "RETRIEVING_USERS";
export const RETRIEVE_USERS_SUCCESS = "RETRIEVE_USERS_SUCCESS";
export const RETRIEVE_USERS_FAILURE = "RETRIEVE_USERS_FAILURE";

export function updateUserBuilding( userId, buildingId ) {
	return {
		type: UPDATE_USER_BUILDING,
		userId,
		buildingId,
	}
};

export function retrievingUsers() {
	return {
		type: RETRIEVING_USERS,
	}
}

export function retrieveUsersSuccess( users ) {
	console.log( users );
	return {
		type: RETRIEVE_USERS_SUCCESS,
		users,
	}
}

export function retrieveUsersFailure( error ) {
	console.log( error );
	return {
		type: RETRIEVE_USERS_FAILURE,
		error,
	}
}

export function retrieveUsers() {
	return ( dispatch ) => {
		dispatch( retrievingUsers() );

		return fetch( "http://localhost:3000/user" )
			.then( response => response.json() )
			.then(
				users => {
					return dispatch( retrieveUsersSuccess( users ) )
				}
			)
			.catch(
				error => dispatch( retrieveUsersFailure( error ) )
			);
	}
}
