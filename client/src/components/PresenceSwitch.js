import React from "react";
import styled from "styled-components";
import { colors } from "@yoast/style-guide";
import { ReactComponent as Building1Svg } from "./svg/building1.svg";
import { ReactComponent as Building2Svg } from "./svg/building2.svg";
import { ReactComponent as Building3Svg } from "./svg/building3.svg";
import { ReactComponent as Building4Svg } from "./svg/building4.svg";
import { ReactComponent as HouseSvg } from "./svg/house.svg";

const buildingColors = [
	colors.$palette_green,
	colors.$color_pink_dark,
	colors.$color_blue,
	colors.$palette_red,
	colors.$color_orange,
];

const StyledTd = styled.td`
  	font-size: 1em;
  	border-radius: 10px;
  	text-align: center;
`;

const stylify = function( image ) {
	return styled( image )`
		height: 50px;
		width: 50px;
		padding: 3px;
	`
};

const entered = function( image, color ) {
	return styled( image )`
		color: white;
		background-color: ${color};
	`
};

const left = function( image, color ) {
	return styled( image )`
		color: ${color};
		background-color: white;
		opacity: 0.6;
	`
};

const styledBuildingsSvg = [
	stylify( HouseSvg ),
	stylify( Building1Svg ),
	stylify( Building2Svg ),
	stylify( Building3Svg ),
	stylify( Building4Svg )
];

export default class PresenceSwitch extends React.Component {
	render() {
		const buildingId = this.props.building;
		const isEmployeeInBuilding = this.props.employee.buildingId === buildingId;
		const newBuildingId = isEmployeeInBuilding ? null : buildingId;

		const StyledBuildingSvg = styledBuildingsSvg[ buildingId || 0 ];
		if ( isEmployeeInBuilding ) {
			const EnteredSvg = entered( StyledBuildingSvg, buildingColors[ buildingId || 0 ] );
			return (
				<StyledTd
					onClick={
						() => {
							this.props.changeBuilding( this.props.employee.id, newBuildingId );
						}
					}
				>
					<EnteredSvg />
				</StyledTd>
			);
		}

		const LeftSvg = left( StyledBuildingSvg, buildingColors[ buildingId || 0 ] );
		return (
			<StyledTd
				onClick={
					() => {
						this.props.changeBuilding( this.props.employee.id, newBuildingId );
					}
				}
			>
				<LeftSvg />
			</StyledTd>
		);

	}
}
