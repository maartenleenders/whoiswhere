import { NEW_EMPLOYEE_CREATED, INCOMING_EMPLOYEES, UPDATE_EMPLOYEE_BUILDING, DELETE_EMPLOYEE_SUCCESS } from "../actions/employees";

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

export function employeesByIdReducer( state = initialState.byId, action ) {
	const copyState = () => {
		return Object.assign( {}, state );
	};

	switch ( action.type ) {
		case UPDATE_EMPLOYEE_BUILDING: {
			let newState = copyState();
			newState[ action.employeeId ] = Object.assign( {}, newState[ action.employeeId ], { buildingId: action.buildingId } );
			return newState;
		}
		case INCOMING_EMPLOYEES: {
			let newState = copyState();
			action.employees.forEach( ( employee ) => {
				newState[ employee.id ] = employee;
			} );
			return newState;
		}
		case NEW_EMPLOYEE_CREATED: {
			let newState = copyState();
			newState[ action.employee.id ] = action.employee;
			return newState;
		}
		case DELETE_EMPLOYEE_SUCCESS: {
			// Filter the object
			const newState = Object.keys( state )
				.filter( id => id !== action.employeeId )
				.reduce( ( aggregator, id ) => {
					return {
						...aggregator,
						[ id ]: state[ id ],
					}
				}, {} );
			return newState;
		}
		default:
			return state;
	}
}

export function employeesAllIdsReducer( state = initialState.allIds, action ) {
	switch ( action.type ) {
		case INCOMING_EMPLOYEES: {
			return action.employees.map( employee => employee.id );
		}
		case NEW_EMPLOYEE_CREATED: {
			let newState = [ ...state ];
			newState.push( action.employee.id );
			return newState;
		}
		case DELETE_EMPLOYEE_SUCCESS: {
			return state.filter( id => id !== action.employeeId );
		}
		default:
			return state;
	}
}
