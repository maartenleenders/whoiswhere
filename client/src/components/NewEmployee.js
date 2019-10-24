import React  from "react";

export default class NewEmployee extends React.Component {
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
				className="add-employee"
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
						onClick={ () => this.props.goTo( "employees" ) }
					>
						Go back
					</button>
					<button onClick={ () => this.props.newEmployee( this.state.firstName, this.state.lastName ) }>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
