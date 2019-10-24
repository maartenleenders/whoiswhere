import React  from "react";
import styled from "styled-components";
import { Button, ButtonArea } from "./Button";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 25%;
	background-color: lightcyan;
	margin: 0 auto;
	justify-content: center;
	padding: 8px;
`;

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
			<StyledContainer>
				<label htmlFor="firstName">First name:</label>
				<input name="firstName" value={ this.state.firstName } onChange={ event => this.setState( { firstName: event.target.value } ) } />
				<br />

				<label htmlFor="lastName">Last name:</label>
				<input name="lastName" value={ this.state.lastName } onChange={ event => this.setState( { lastName: event.target.value } ) } />
				<br />

				<ButtonArea>
					<Button
						onClick={ () => this.props.goTo( "employees" ) }
					>
						Go back
					</Button>
					<Button onClick={ () => this.props.newEmployee( this.state.firstName, this.state.lastName ) }>
						Submit
					</Button>
				</ButtonArea>
			</StyledContainer>
		);
	}
}
