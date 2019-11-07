export const UPDATE_EMPLOYEE_BUILDING = "UPDATE_EMPLOYEE_BUILDING";

export const RETRIEVE_EMPLOYEES = "RETRIEVE_EMPLOYEES";
export const INCOMING_EMPLOYEES = "INCOMING_EMPLOYEES";

export const NEW_EMPLOYEE_REQUEST = "NEW_EMPLOYEE_REQUEST";
export const NEW_EMPLOYEE_CREATED = "NEW_EMPLOYEE_CREATED";

export const DELETE_EMPLOYEE_REQUEST = 'DELETE_EMPLOYEE_REQUEST';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';

export function updateEmployeeBuilding( employeeId, buildingId ) {
	return {
		type: UPDATE_EMPLOYEE_BUILDING,
		employeeId,
		buildingId,
		emit: true,
	}
};

export function retrieveEmployees() {
	return {
		type: RETRIEVE_EMPLOYEES,
		emit: true,
	}
}

export function newEmployeeRequest( employeeData ) {
	return {
		type: NEW_EMPLOYEE_REQUEST,
		employeeData,
		emit: true,
	}
}

export function newEmployeeCreated( employee ) {
	return {
		type: NEW_EMPLOYEE_CREATED,
		employee,
		emit: true,
	}
}

export function deleteEmployeeRequest_legacy( employeeId ) {
	return {
		type: DELETE_EMPLOYEE_REQUEST,
		employeeId,
		emit: true,
	}
}

export function deleteEmployeeRequest( employeeId ) {
	const Http = new XMLHttpRequest();
	const url = `http://localhost:3000/employee/${employeeId}/delete`;
	Http.open( "POST", url );
	Http.send();

	Http.onreadystatechange = () => {
		console.log( Http.responseText );
	};
	return {
		type: DELETE_EMPLOYEE_REQUEST,
		employeeId,
		emit: false,
	}
}
