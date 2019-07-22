import React, { Fragment } from "react";
import UserRow from "./UserRow";

export default class UserTable extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.getUsers();
	}

	render() {
		return (
			<Fragment>
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
						<UserRow key={user.id} user={user} changeBuilding={ this.props.changeBuilding }/>
					) ) }
					</tbody>
				</table>
				<div
					className="button-area"
				>
					<button
						onClick={ () => this.props.goTo( "add-user" ) }
					>
						Add friend!
					</button>
				</div>
			</Fragment>
		);
	}
}
