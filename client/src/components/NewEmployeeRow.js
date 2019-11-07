import React  from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Checkbox from "./Checkbox";
import Select from "react-select";

const StyledInput = styled.input`
	width: 50%%;
	height: 2.5em;
	margin-bottom: 2em;
`;

const priorityOptions = [
	{ value: 900, label: "CEO - Marieke" },
	{ value: 800, label: "CPO - Joost" },
	{ value: 700, label: "COO - Michiel" },
	{ value: 600, label: "CTO - Omar" },
	{ value: 100, label: "MT" },
	{ value: 10, label: "Employee" },
	{ value: 1, label: "Intern" },
	{ value: 0, label: "Eyes & Ears" },
];

const defaultState = {
	firstName: "",
	lastName: "",
	isBhv: false,
	priority: 10,
	function: "Employee"
};

// todo: style the SELECT BOX
export default class NewEmployeeRow extends React.Component {
	constructor( props ) {
		super( props );
		this.toggleBhv = this.toggleBhv.bind( this );
		this.setPriorityAndFunction = this.setPriorityAndFunction.bind( this );
		this.composeEmployee = this.composeEmployee.bind( this );
	}

	state = defaultState;

	toggleBhv( event ) {
		this.setState( {
			isBhv: event.target.checked,
		} );
	}

	setPriorityAndFunction( event ) {
		this.setState( {
			priority: event.value,
			function: event.label,
		} );
	}

	composeEmployee() {
		const { firstName, lastName, isBhv } = this.state;
		return {
			firstName,
			lastName,
			isBhv,
			priority: this.state.isBhv ? this.state.priority + 1 : this.state.priority
		}
	}

	render() {
		return (
			<tr>
				<td>
					<StyledInput
						name="firstName"
						value={ this.state.firstName }
						onChange={ event => this.setState( { firstName: event.target.value } ) }
						placeholder="First name"
					/>
					<StyledInput
						name="lastName"
						value={ this.state.lastName }
						onChange={ event => this.setState( { lastName: event.target.value } ) }
						placeholder="Last name"
					/>
				</td>
				<td colSpan={ 4 }>
					<Select
						onChange={ event => this.setPriorityAndFunction( event ) }
						options={ priorityOptions }
						value={ { value: this.state.priority, label: this.state.function } }
					/>
				</td>
				<td >
					<Checkbox className={ "test" } label={"BHV"} checked={ this.state.isBhv } onChange={ event => this.toggleBhv( event ) } />
				</td>
				<td>
					<Button
						onClick={
							() => {
								this.props.addNewEmployee( this.composeEmployee() );
								this.setState( defaultState );
							}
						}
					>
						Submit
					</Button>
				</td>
			</tr>
		);
	}
}
