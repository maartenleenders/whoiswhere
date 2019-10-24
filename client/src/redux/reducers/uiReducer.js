import { TOGGLE_ADMIN_OPTIONS } from "../actions/ui";

const initialState = {
	adminLoggedIn: false,
};

export function uiReducer( state = initialState, action ) {
	switch ( action.type ) {
		case TOGGLE_ADMIN_OPTIONS:
			const newState = Object.assign( {}, state );
			newState.adminLoggedIn = ! newState.adminLoggedIn;
			return newState;
		default:
			return state;
	}
}
