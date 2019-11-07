import React from "react";
import styled from "styled-components";
import { colors } from "@yoast/style-guide";
import { ReactComponent as Building1Svg } from "./svg/building1.svg";
import { ReactComponent as Building2Svg } from "./svg/building2.svg";
import { ReactComponent as Building3Svg } from "./svg/building3.svg";
import { ReactComponent as Building4Svg } from "./svg/building4.svg";
import { ReactComponent as HouseSvg } from "./svg/house.svg";

const buildingColors = [
	colors.$color_grey_disabled,
	colors.$color_pink_dark,
	colors.$palette_green_medium,
	colors.$palette_orange_light,
	colors.$color_blue,
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

const present = function( image, color ) {
	return styled( image )`
		color: white;
		background-color: ${color};
		border: black 1px;
	`
};

const absent = function( image, color ) {
	return styled( image )`
		color: ${color};
		background-color: white;
		opacity: 0.2;
		border: 1px solid;
		border-color: grey;
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
	constructor( props ) {
		super( props );

		this.isEmployeePresent = this.isEmployeePresent.bind( this );
		this.building = this.props.building;
	}

	isEmployeePresent() {
		return this.props.employee.buildingId === this.props.building;
	}

	generatePresenceIcon() {
		const buildingIcon = styledBuildingsSvg[ this.building || 0 ];
		const buildingColor = buildingColors[ this.building || 0 ];
		return this.isEmployeePresent()
			? present( buildingIcon, buildingColor )
			: absent( buildingIcon, buildingColor );
	}

	render() {
		const buildingId = this.props.building;
		const isEmployeeInBuilding = this.props.employee.buildingId === buildingId;
		const newBuildingId = isEmployeeInBuilding ? null : buildingId;
		const PresenceIcon = this.generatePresenceIcon();

		return (
			<StyledTd
				onClick={
					() => {
						this.props.changeBuilding( this.props.employee.id, newBuildingId );
					}
				}
			>
				<PresenceIcon />
			</StyledTd>
		);
	}
}
