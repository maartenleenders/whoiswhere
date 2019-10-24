import { connect } from "react-redux";
import { newEmployeeRequest } from "../redux/actions/employees";
import NewEmployee from "../components/NewEmployee";


function mapDispatchToProps( dispatch ) {
	return {
		newEmployee: ( firstName, lastName ) => dispatch( newEmployeeRequest( firstName, lastName ) ),
	}
}

const newEmployeeContainer = connect( null, mapDispatchToProps )( NewEmployee );

export default newEmployeeContainer;
