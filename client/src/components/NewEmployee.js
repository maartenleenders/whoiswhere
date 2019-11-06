import React  from "react";
import styled from "styled-components";
import { colors } from "@yoast/style-guide";
import { Button, ButtonArea } from "./Button";

const InputArea = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 25%;
	margin: 0 auto;
	justify-content: center;
	padding: 8px;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 3em;
`;

const Page = styled.div`
	width: 100%;
	background-color: ${colors.$palette_grey_ultra_light};
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
			<Page>
				<InputArea>
					<label htmlFor="firstName">First name:</label>
					<StyledInput name="firstName" value={ this.state.firstName } onChange={ event => this.setState( { firstName: event.target.value } ) } />
					<br />

					<label htmlFor="lastName">Last name:</label>
					<StyledInput name="lastName" value={ this.state.lastName } onChange={ event => this.setState( { lastName: event.target.value } ) } />
					<br />

					<ButtonArea>
						<Button
							onClick={ () => this.props.goTo( "employees" ) }
						>
							Go back
						</Button>
						<Button
							onClick={
								() => {
									this.props.newEmployee( this.state.firstName, this.state.lastName );
									this.props.goTo( "employees" );
								}
							}
						>
							Submit
						</Button>
					</ButtonArea>
				</InputArea>
			</Page>
		);
	}
}
