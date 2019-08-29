import React  from "react";

export default class NewUser extends React.Component {
	constructor() {
		super();
	}

	state = {
		firstName: "",
		lastName: "",
	};

	render() {
		return (
			<div
				className="add-user"
			>
				<label htmlFor="firstName">First name:</label>
				<input name="firstName" value={ this.state.firstName } onChange={ event => this.setState( { firstName: event.target.value } ) } />
				<br />

				<label htmlFor="lastName">Last name:</label>
				<input name="lastName" value={ this.state.lastName } onChange={ event => this.setState( { lastName: event.target.value } ) } />
				<br />

				<div
					className="button-area"
				>
					<button
						onClick={ () => this.props.goTo( "users" ) }
					>
						Go back
					</button>
					<button onClick={ () => this.props.newUser( this.state.firstName, this.state.lastName ) }>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
