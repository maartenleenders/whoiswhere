import styled from "styled-components";
import { colors } from "@yoast/style-guide";
import React from "react";

const Checkmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #eee;

	:after {
		content: "";
		position: absolute;
		display: none;
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

const CustomLabel = styled.label`
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
		:checked ~ span {
			background-color: ${ colors.$color_green_medium_light };
		}
		:checked ~ span:after {
			display: block;
		}
	}

	:hover {
		input ~ span {
			background-color: lightgrey;
		}
	}
}
`;

const Checkbox = ( props ) => {
	return(
		<CustomLabel>
			{ props.label }
			<input type="checkbox" { ...props } />
			<Checkmark className={ props.className } />
		</CustomLabel>
	);
};

export default Checkbox;
