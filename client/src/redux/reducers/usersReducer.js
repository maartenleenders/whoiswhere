import { NEW_USER_CREATED, INCOMING_USERS, UPDATE_USER_BUILDING, DELETE_USER_SUCCESS } from "../actions/users";

const initialState = {
	byId: {
		1: {
			firstName: "Ted",
			lastName: "Schmosby",
			buildingId: null,
			id: 1,
		}
	},
	allIds: [ 1 ],
};

export function usersByIdReducer( state = initialState.byId, action ) {
	const copyState = () => {
		return Object.assign( {}, state );
	};

	switch ( action.type ) {
		case UPDATE_USER_BUILDING: {
			let newState = copyState();
			newState[ action.userId ] = Object.assign( {}, newState[ action.userId ], { buildingId: action.buildingId } );
			return newState;
		}
		case INCOMING_USERS: {
			let newState = copyState();
			action.users.forEach( ( user ) => {
				newState[ user.id ] = user;
			} );
			return newState;
		}
		case NEW_USER_CREATED: {
			let newState = copyState();
			newState[ action.user.id ] = action.user;
			return newState;
		}
		case DELETE_USER_SUCCESS: {
			let newState = copyState();
			delete newState[ action.userId ];
			return newState;
		}
		default:
			return state;
	}
}

export function usersAllIdsReducer( state = initialState.allIds, action ) {
	switch ( action.type ) {
		case INCOMING_USERS: {
			return action.users.map( user => user.id );
		}
		case NEW_USER_CREATED: {
			let newState = [ ...state ];
			newState.push( action.user.id );
			return newState;
		}
		case DELETE_USER_SUCCESS: {
			let newState = [ ...state ];
			newState.filter( id => id !== action.userId );
			console.log( newState );
			return newState;
		}
		default:
			return state;
	}
}
