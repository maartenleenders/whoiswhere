import { connect } from "react-redux";
import UserTable from "../components/UserTable";

function mapStateToProps( state ) {
	const users = state.entities.users.allIds.map( userId => state.entities.users.byId[ userId ] );
	return {
		users,
	};
}

const UserTableContainer = connect( mapStateToProps )( UserTable );

export default UserTableContainer;
