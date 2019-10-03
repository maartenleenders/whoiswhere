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

export default class UserRow extends React.Component {
	renderDeleteButton( userId ) {
		if ( this.props.adminLoggedIn ) {
			const StyledWastebin = stylify( Wastebin);
			return(
				<StyledTd>
					<StyledButton onClick={ () => this.props.deleteUser( userId ) }>
						<StyledWastebin/>
					</StyledButton>
				</StyledTd>
			);
		}
	}

	render() {
		const { user, changeBuilding } = this.props;
		return (
			<tr>
				<td>{user.firstName + " " + user.lastName}</td>
				<PresenceSwitch building={1} user={user} changeBuilding={changeBuilding} />
				<PresenceSwitch building={2} user={user} changeBuilding={changeBuilding} />
				<PresenceSwitch building={3} user={user} changeBuilding={changeBuilding} />
				<PresenceSwitch building={4} user={user} changeBuilding={changeBuilding} />
				<PresenceSwitch building={null} user={user} changeBuilding={changeBuilding} />

				{this.renderDeleteButton( user.id )}
			</tr>
		);
	}
}
