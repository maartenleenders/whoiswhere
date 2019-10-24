import React from "react";
import PresenceSwitch from "./PresenceSwitch";
import { ReactComponent as Wastebin } from "./svg/wastebin.svg";
import styled from "styled-components";

const StyledTd = styled.td`
  	font-size: 1em;
  	border-radius: 10px;
  	text-align: center;
`;

const StyledButton = styled.button`
  	font-size: 1em;
  	text-align: center;
  	horizontal-align: center;
	border-color: transparent;
	background-color: transparent;
`;

const stylify = function( image ) {
	return styled( image )`
		height: 40px;
		width: 40px;
		background-color: transparent;
		color: gray;
	`
};

export default class EmployeeRow extends React.Component {
	renderDeleteButton( employeeId ) {
		if ( this.props.adminLoggedIn ) {
			const StyledWastebin = stylify( Wastebin);
			return(
				<StyledTd>
					<StyledButton onClick={ () => this.props.deleteEmployee( employeeId ) }>
						<StyledWastebin/>
					</StyledButton>
				</StyledTd>
			);
		}
	}

	render() {
		const { employee, changeBuilding } = this.props;
		return (
			<tr>
				<td>{employee.firstName + " " + employee.lastName}</td>
				<PresenceSwitch building={1} employee={employee} changeBuilding={changeBuilding} />
				<PresenceSwitch building={2} employee={employee} changeBuilding={changeBuilding} />
				<PresenceSwitch building={3} employee={employee} changeBuilding={changeBuilding} />
				<PresenceSwitch building={4} employee={employee} changeBuilding={changeBuilding} />
				<PresenceSwitch building={null} employee={employee} changeBuilding={changeBuilding} />

				{this.renderDeleteButton( employee.id )}
			</tr>
		);
	}
}
