import React, { Fragment } from "react";

export default class AddUser extends React.Component {
	constructor() {
		super();
		this.addUser = this.addUser.bind( this );
	}

	state = {
		firstName: "",
		lastName: "",
		age: "",
		disabled: false,
	};

	addUser() {
		if ( this.state.disabled ) {
			return;
		}
		this.setState( { disabled: true } );
		const body = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			age: this.state.age,
		};
		fetch( "http://localhost:3000/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify( body ),
		} ).then( () => {
			this.props.goTo( "users" );
		} );
	}

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

				<label htmlFor="age">Age:</label>
				<input name="age" value={ this.state.age } type="number" onChange={ event => this.setState( { age: event.target.value } ) } />
				<br />

				<div
					className="button-area"
				>
					<button
						onClick={ () => this.props.goTo( "users" ) }
					>
						Go back
					</button>
					<button onClick={ this.addUser }>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
