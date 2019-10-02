import React, { Fragment } from "react";
import UserRow from "./UserRow";

export default class UserTable extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.getUsers();
	}

	renderAdminOptions() {
		if ( this.props.adminLoggedIn ) {
			return(
				<div
					className="button-area"
				>
					<button
						onClick={ () => this.props.goTo( "new-user" ) }
					>
						Add friend!
					</button>
				</div>
			);
		}
		return null;
	}

	render() {
		return (
			<Fragment>
				<div>
					<table className="user-table" >
						<thead>
						<tr>
							<th>Name</th>
							<th>1</th>
							<th>2</th>
							<th>3</th>
							<th>4</th>
							<th>🏝</th>
						</tr>
						</thead>
						<tbody>
						{ this.props.users.map( user => (
							<UserRow
								key={user.id}
								user={user}
								changeBuilding={ this.props.changeBuilding }
								deleteUser={ this.props.deleteUser }
								adminLoggedIn={ this.props.adminLoggedIn }
							/>
						) ) }
						</tbody>
					</table>
					<button
						className="show-admin-toggle"
						onClick={ () => this.props.toggleAdminOptions() }
					>
						⚙️
					</button>
				</div>
				{ this.renderAdminOptions() }
			</Fragment>
		);
	}
}
