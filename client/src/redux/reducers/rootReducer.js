import { combineReducers } from "redux";
import { employeesAllIdsReducer, employeesByIdReducer } from "./employeesReducer";
import { uiReducer } from "./uiReducer";

const employeesReducer = combineReducers( {
	byId: employeesByIdReducer,
	allIds: employeesAllIdsReducer,
} );

const entitiesReducer = combineReducers( {
	employees: employeesReducer,
} );

const rootReducer = combineReducers( {
	entities: entitiesReducer,
	ui: uiReducer,
} ) ;

export default rootReducer;
