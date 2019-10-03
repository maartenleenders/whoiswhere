import React from "react";
import PresenceSwitch from "./PresenceSwitch";

export default class UserRow extends React.Component {
	renderDeleteButton( userId ) {
		if ( this.props.adminLoggedIn ) {
			return(
				<td>
					<button onClick={ () => this.props.deleteUser( userId ) }>
						🗑️
					</button>
				</td>
			);
		}
	}

	render() {
		const { user, changeBuilding } = this.props;
		return (
			<tr>
				<td>{user.firstName + " " + user.lastName}</td>
				<PresenceSwitch building={1} user={user} changeBuilding={changeBuilding} />
				<PresenceSwitch building={2} user={user} changeBuilding={changeBuilding} />
				<PresenceSwitch building={3} user={user} changeBuilding={changeBuilding} />
				<PresenceSwitch building={4} user={user} changeBuilding={changeBuilding} />
				<PresenceSwitch building={null} user={user} changeBuilding={changeBuilding} />

				{this.renderDeleteButton( user.id )}
			</tr>
		);
	}
}
