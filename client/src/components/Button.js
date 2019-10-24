import styled from "styled-components";
import { colors } from "@yoast/style-guide";

export const Button = styled.button`
	margin: 0;
	border: 1px solid #64a60a;
	background-color: ${ colors.$color_green_medium_light };
	color: white;
	filter: drop-shadow(0 2px 4px rgb(0,0,0,0.2));
	border-radius: 3px;
	font: 700 14px/24px "Open Sans", sans-serif;
	cursor: pointer;
	vertical-align: top;
	text-align: center;
	margin: 4px;
`;

export const ButtonArea = styled.div`
	display: flex;
	max-width: 100%;
	justify-content: center;
`;
