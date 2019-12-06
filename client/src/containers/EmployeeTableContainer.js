import { connect } from "react-redux";
import EmployeeTable from "../components/EmployeeTable";
import {
	deleteEmployeeRequest,
	newEmployeeRequest,
	retrieveEmployees,
	updateEmployeeBuilding
} from "../redux/actions/employees";
import { toggleAdminOptions } from "../redux/actions/ui";
import { newUserRequest } from "../redux/actions/users";

function mapStateToProps( state ) {
	const employees = state.entities.employees.allIds.map( employeeId => state.entities.employees.byId[ employeeId ] );
	const adminLoggedIn = state.ui.adminLoggedIn;
	return {
		employees,
		adminLoggedIn,
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		changeBuilding: ( employeeId, buildingId ) => dispatch( updateEmployeeBuilding( employeeId, buildingId ) ),
		getEmployees: () => dispatch( retrieveEmployees() ),
		deleteEmployee: ( employeeId ) => dispatch( deleteEmployeeRequest( employeeId ) ),
		toggleAdminOptions: () => dispatch( toggleAdminOptions() ),
		addNewEmployee: ( employeeData ) => dispatch( newEmployeeRequest( employeeData ) ),
		addNewUser: ( userData ) => dispatch( newUserRequest( userData ) ),
	}
}

const EmployeeTableContainer = connect( mapStateToProps, mapDispatchToProps )( EmployeeTable );

export default EmployeeTableContainer;
