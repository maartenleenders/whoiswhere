import { connect } from "react-redux";
import UserTable from "../components/UserTable";

function mapStateToProps( state ) {
	return {
		users: state.entities.users,
	};
}

const UserTableContainer = connect( mapStateToProps )( UserTable );

export default UserTableContainer;
