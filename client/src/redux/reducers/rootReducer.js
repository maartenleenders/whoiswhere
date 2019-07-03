import { combineReducers } from "redux";
import { usersAllIdsReducer, usersByIdReducer } from "./usersReducer";

const usersReducer = combineReducers( {
	byId: usersByIdReducer,
	allIds: usersAllIdsReducer,
} );

const entitiesReducer = combineReducers( {
	users: usersReducer,
} );

const rootReducer = combineReducers( {
	entities: entitiesReducer,
} ) ;

export default rootReducer;
