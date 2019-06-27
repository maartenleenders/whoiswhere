import { RETRIEVE_USERS_SUCCESS, UPDATE_USER_BUILDING } from "../actions/users";

const initialState = {
	byId: {},
	allIds: [],
};

export function usersByIdReducer( state = initialState.byId, action ) {
	switch ( action.type ) {
		case UPDATE_USER_BUILDING:
			const newState = Object.assign( {}, state );
			newState[ action.userId ] = Object.assign( {}, newState[ action.userId ], { buildingId: action.buildingId } );
			return newState;
		case RETRIEVE_USERS_SUCCESS:
			const retrievedUsers = {};
			action.users.forEach( ( user ) => {
				retrievedUsers[ user.id ] = user;
			} );
			return Object.assign( {}, state, retrievedUsers );
		default:
			return state;
	}
}

export function usersAllIdsReducer( state = initialState.allIds, action ) {
	switch ( action.type ) {
		case RETRIEVE_USERS_SUCCESS:
			return action.users.map( user => user.id );
		default:
			return state;
	}
}
