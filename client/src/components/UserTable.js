import React, { Fragment } from "react";
import UserRow from "./UserRow";

export default class UserTable extends React.Component {
	constructor() {
		super();
	}

	state = { showGif: false };

	render() {
		console.log( this.state );
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
						<th
							onClick={ () => {
								this.setState( { showGif: ! this.state.showGif } )
							} }
						>
							🏝
						</th>
					</tr>
					</thead>
					<tbody>
					{ this.props.users.map( user => (
						<UserRow key={user.id} user={user} refresh={ () => {} } socket={ this.props.socket }/>
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
				{
					<div
						style={ { display: this.state.showGif ? "block" : "none", margin: "0 auto" } }
					>
						<iframe src="https://giphy.com/embed/5xtDarqlsEW6F7F14Fq" width="480" height="270"
								frameBorder="0" className="giphy-embed" allowFullScreen style={ { margin: "0 auto" } }>
						</iframe>
					</div>
				}
			</Fragment>
		);
	}

	componentDidMount() {
		this.props.getUsers();
		this.props.socket.on( "buildingChange", ( data ) => {
			const userId = data.userId;
			const buildingId = data.buildingId;
			this.props.updateUserBuilding( userId, buildingId );
		} );
		// setInterval( this.getUsers, 2000 );
	}
}
