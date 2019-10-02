import { combineReducers } from "redux";
import { usersAllIdsReducer, usersByIdReducer } from "./usersReducer";
import { uiReducer } from "./uiReducer";

const usersReducer = combineReducers( {
	byId: usersByIdReducer,
	allIds: usersAllIdsReducer,
} );

const entitiesReducer = combineReducers( {
	users: usersReducer,
} );

const rootReducer = combineReducers( {
	entities: entitiesReducer,
	ui: uiReducer,
} ) ;

export default rootReducer;
