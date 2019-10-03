import React, { Fragment } from "react";
import UserRow from "./UserRow";
import styled from "styled-components";

const StyledThread = styled.thead`
  	font-size: 1em;
  	border-radius: 10px;
  	text-align: center;
`;

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
						<StyledThread>
						<tr>
							<th>Name</th>
							<th colspan="4">Buildings </th>
							<th>At home</th>
						</tr>
						</StyledThread>
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
