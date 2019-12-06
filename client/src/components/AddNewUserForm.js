import React  from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Checkbox from "./Checkbox";
import { StyledInput } from "./Forms";

const NewUserArea = styled.div`
	width: 50%;
	margin: 0 auto;
`;

const defaultState = {
	userName: "",
	password: "",
	isAdmin: false,
};

export default class NewUserForm extends React.Component {
	constructor( props ) {
		super( props );
		this.toggleAdmin = this.toggleAdmin.bind( this );
		this.composeUser = this.composeUser.bind( this );
	}

	state = defaultState;

	toggleAdmin( event ) {
		this.setState( {
			isAdmin: event.target.checked,
		} );
	}

	composeUser() {
		const { userName, password, isAdmin } = this.state;
		console.log( userName, password, isAdmin );
		return {
			userName,
			password,
			isAdmin,
		}
	}

	render() {
		return (
			<NewUserArea>
				<StyledInput
					name="username"
					value={ this.state.userName }
					onChange={ event => this.setState( { userName: event.target.value } ) }
					placeholder="username"
				/>
				<StyledInput
					name="password"
					value={ this.state.password }
					onChange={ event => this.setState( { password: event.target.value } ) }
					placeholder="password"
					type="password"
				/>
				<Checkbox className={ "adminCheckBox" } label={"Make admin"} checked={ this.state.isAdmin } onChange={ event => this.toggleAdmin( event ) } />
				<Button
					onClick={
						() => {
							this.props.addNewUser( this.composeUser() );
							this.setState( defaultState );
						}
					}
				>
					Submit
				</Button>
			</NewUserArea>
		);
	}
}
