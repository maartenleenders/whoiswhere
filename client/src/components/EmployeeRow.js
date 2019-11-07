import React from "react";
import PresenceSwitch from "./PresenceSwitch";
import { ReactComponent as IconBhv } from "./svg/redcross.svg";
import { ReactComponent as Wastebin } from "./svg/wastebin.svg";
import styled from "styled-components";

const StyledTd = styled.td`
	font-size: 1em;
	border-radius: 10px;
	text-align: left;
`;

const NameBadge = styled.span`
	height: 40px;
	margin-right: 8px;
	vertical-align: middle;
`;

const StyledButton = styled.button`
	font-size: 1em;
	text-align: center;
	horizontal-align: center;
	border-color: transparent;
	background-color: transparent;
`;

const StyledWastebin = styled( Wastebin )`
	height: 40px;
	width: 40px;
	background-color: transparent;
	color: gray;
`;

const StyledBhv = styled( IconBhv )`
	height: 1em;
	width: 1em;
	background-color: transparent;
	fill: red;
	vertical-align: text-bottom;
`;

export default class EmployeeRow extends React.Component {
	renderDeleteButton( employeeId ) {
		if ( this.props.adminLoggedIn ) {
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
		const badge = employee.isBhv ? <StyledBhv /> : null;
		return (
			<tr>
				<StyledTd><NameBadge>{`${ employee.firstName } ${ employee.lastName } `}{ badge }</NameBadge></StyledTd>
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
