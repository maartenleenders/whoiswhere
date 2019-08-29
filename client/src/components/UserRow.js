import React from "react";

export default class UserRow extends React.Component {
	userInBuilding( buildingId ) {
		const isUserInBuilding = this.props.user.buildingId === buildingId;
		const newBuildingId = isUserInBuilding ? null : buildingId;
		return (
			<td
				onClick={
					() => {
						this.props.changeBuilding( this.props.user.id, newBuildingId );
					}
				}
			>
				{isUserInBuilding ? "✅" : "❌"}
			</td>
		);
	}

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
		const user = this.props.user;
		return (
			<tr>
				<td>{user.firstName + " " + user.lastName}</td>
				{this.userInBuilding( 1 )}
				{this.userInBuilding( 2 )}
				{this.userInBuilding( 3 )}
				{this.userInBuilding( 4 )}
				{this.userInBuilding( null )}
				{
					this.renderDeleteButton( user.id )
				}
			</tr>
		);
	}
}
