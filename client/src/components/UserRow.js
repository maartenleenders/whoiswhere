import React from "react";

export default class UserRow extends React.Component {
	userInBuilding( buildingId ) {
		const isUserInBuilding = this.props.user.buildingId === buildingId;
		return(
			<td
				onClick={
					() => {
						this.props.socket.emit( "buildingChange", {
							userId: this.props.user.id,
							buildingId: isUserInBuilding ? null : buildingId,
						} );
					}
				}
			>
				{ isUserInBuilding ? "✅" : "❌" }
			</td>
		);
	}
	render() {
		const user = this.props.user;
		return (
			<tr>
				<td>{ user.firstName + " " + user.lastName }</td>
				{ this.userInBuilding( 1 ) }
				{ this.userInBuilding( 2 ) }
				{ this.userInBuilding( 3 ) }
				{ this.userInBuilding( 4 ) }
				{ this.userInBuilding( null ) }
			</tr>
		);
	}
}
