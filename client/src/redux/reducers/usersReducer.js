import { UPDATE_USER_BUILDING } from "../actions/users";

const initialState = {
	byId: { 1: {
		firstName: "Ted",
		lastName: "Schmosby",
		id: 1,
	} },
	allIds: [ 1 ],
};

export function usersByIdReducer( state = initialState.byId, action ) {
	switch ( action.type ) {
		case UPDATE_USER_BUILDING:
			{
				let newState = Object.assign( {}, state );
				newState[ action.userId ] = Object.assign( {}, newState[ action.userId ], { buildingId: action.buildingId } );
				return newState;
			}
		case "INCOMING_USERS":
			{
				let newState = Object.assign( {}, state );
				action.users.forEach( ( user ) => {
					console.log( user );
					newState[ user.id ] = user;
				} );
				return newState;
			}
		default:
			return state;
	}
}

export function usersAllIdsReducer( state = initialState.allIds, action ) {
	switch ( action.type ) {
		case "INCOMING_USERS":
		{
			return action.users.map( user => user.id );
		}
		default:
			return state;
	}
}
