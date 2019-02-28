import React from "react";

export default class UserRow extends React.Component {
	userInBuilding( buildingId ) {
		return(
			<td
				onClick={ () => {
					fetch( `http://localhost:3000/user/${ this.props.user.id }/set-building`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify( {
							buildingId,
						} ),
					} ).then( () => {
						this.props.refresh();
					} );
				} }
			>
				{ this.props.user.buildingId === buildingId ? "✅" : "❌" }
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
