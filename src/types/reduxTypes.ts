export const RETRIEVE_EMPLOYEES = 'RETRIEVE_EMPLOYEES';
export const INCOMING_EMPLOYEES = 'INCOMING_EMPLOYEES';

export const UPDATE_EMPLOYEE_BUILDING = 'UPDATE_EMPLOYEE_BUILDING';

export const NEW_EMPLOYEE_REQUEST = 'NEW_EMPLOYEE_REQUEST';
export const NEW_EMPLOYEE_CREATED = 'NEW_EMPLOYEE_CREATED';

export const DELETE_EMPLOYEE_REQUEST = 'DELETE_EMPLOYEE_REQUEST';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';

interface RetrieveEmployeesActionType {
    type: typeof RETRIEVE_EMPLOYEES;
}

interface UpdateEmployeeBuildingActionType {
    type: typeof UPDATE_EMPLOYEE_BUILDING;
    buildingId: string;
    employeeId: string;
}

interface NewEmployeeRequestActionType {
    type: typeof NEW_EMPLOYEE_REQUEST;
    employee: object;
}

interface DeleteEmployeeRequestActionType {
    type: typeof DELETE_EMPLOYEE_REQUEST;
    employeeId: string;
}

export type RetrieveEmployeesAction = RetrieveEmployeesActionType;
export type UpdateEmployeeBuildingAction = UpdateEmployeeBuildingActionType;
export type NewEmployeeRequestAction = NewEmployeeRequestActionType;
export type DeleteEmployeeRequestAction = DeleteEmployeeRequestActionType;
