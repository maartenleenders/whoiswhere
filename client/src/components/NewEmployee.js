import React  from "react";
import styled from "styled-components";
import { colors } from "@yoast/style-guide";
import { Button, ButtonArea } from "./Button";
import Checkbox from "./Checkbox";

const InputArea = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 25%;
	margin: 0 auto;
	justify-content: center;
	padding: 8px;
	font-size: 12px;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 2em;
`;

const Page = styled.div`
	width: 100%;
	background-color: ${colors.$palette_grey_ultra_light};
`;

export default class NewEmployee extends React.Component {
	constructor() {
		super();
		this.toggleBhv = this.toggleBhv.bind( this );
		this.setPriority = this.setPriority.bind( this );
	}

	state = {
		firstName: "",
		lastName: "",
		isBhv: false,
		priority: 10,
	};

	toggleBhv( event ) {
		this.setState( {
			isBhv: event.target.checked,
		} );
	}

	setPriority( event ) {
		this.setState( {
			priority: event.target.value,
		} );
	}

	render() {
		return (
			<Page>
				<InputArea>
					<label htmlFor="firstName">First name:</label>
					<StyledInput name="firstName" value={ this.state.firstName } onChange={ event => this.setState( { firstName: event.target.value } ) } />

					<label htmlFor="lastName">Last name:</label>
					<StyledInput name="lastName" value={ this.state.lastName } onChange={ event => this.setState( { lastName: event.target.value } ) } />


					<label htmlFor="function">Priority based on function:</label>
					<select onChange={ ( event ) => this.setPriority( event )}>
						<option value={999}>CEO</option>
						<option value={998}>CPO</option>
						<option value={997}>COO</option>
						<option value={996}>CTO</option>
						<option value={100}>MT</option>
						<option value={10}>Employee</option>
						<option value={1}>Intern</option>
						<option value={0}>Eyes & Ears</option>
					</select>

					<label htmlFor="priority">Custom priority: (optional)</label>
					<StyledInput type="number" name="priority" value={ this.state.priority } onChange={ event => this.setState( { priority: event.target.value } ) } />

					<Checkbox className={ "test" } label={"BHV"} checked={ this.state.isBhv } onChange={ event => this.toggleBhv( event ) } />

					<ButtonArea>
						<Button
							onClick={ () => this.props.goTo( "employees" ) }
						>
							Go back
						</Button>
						<Button
							onClick={
								() => {
									this.props.newEmployee( this.state );
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
