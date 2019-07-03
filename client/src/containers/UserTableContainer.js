import { connect } from "react-redux";
import UserTable from "../components/UserTable";
import { retrieveUsers, updateUserBuilding } from "../redux/actions/users";

function mapStateToProps( state ) {
	const users = state.entities.users.allIds.map( userId => state.entities.users.byId[ userId ] );
	return {
		users,
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		changeBuilding: ( userId, buildingId ) => dispatch( updateUserBuilding( userId, buildingId ) ),
		getUsers: () => dispatch( retrieveUsers() ),
	}
}

const UserTableContainer = connect( mapStateToProps, mapDispatchToProps )( UserTable );

export default UserTableContainer;
