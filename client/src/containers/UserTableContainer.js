import { connect } from "react-redux";
import UserTable from "../components/UserTable";
import { deleteUserRequest, retrieveUsers, updateUserBuilding } from "../redux/actions/users";
import { toggleAdminOptions } from "../redux/actions/ui";

function mapStateToProps( state ) {
	const users = state.entities.users.allIds.map( userId => state.entities.users.byId[ userId ] );
	const adminLoggedIn = state.ui.adminLoggedIn;
	return {
		users,
		adminLoggedIn,
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		changeBuilding: ( userId, buildingId ) => dispatch( updateUserBuilding( userId, buildingId ) ),
		getUsers: () => dispatch( retrieveUsers() ),
		deleteUser: ( userId ) => dispatch( deleteUserRequest( userId ) ),
		toggleAdminOptions: () => dispatch( toggleAdminOptions() ),
	}
}

const UserTableContainer = connect( mapStateToProps, mapDispatchToProps )( UserTable );

export default UserTableContainer;
