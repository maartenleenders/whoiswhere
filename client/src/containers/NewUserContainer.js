import { connect } from "react-redux";
import { newUserRequest } from "../redux/actions/users";
import NewUser from "../components/NewUser";


function mapDispatchToProps( dispatch ) {
	return {
		newUser: ( firstName, lastName ) => dispatch( newUserRequest( firstName, lastName ) ),
	}
}

const newUserContainer = connect( null, mapDispatchToProps )( NewUser );

export default newUserContainer;
