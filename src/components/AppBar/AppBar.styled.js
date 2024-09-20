import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
display: flex;
align-items: center;
font-family: Roboto;
font-size: 18px;
color: #FFFFFF;
line-height: 21.09px;
letter-spacing: .05em;
text-decoration: none;
height: 80px;
position: relative;


&.active{
	color: #E10914;
}

&.active::after{
		content: "";
		position: absolute;
		bottom: 0;
    left: 0;
		border-bottom: 4px solid #E10914;
		display: block;
		width: 100%;
		height: 4px;
	}

&:not(:last-child){
	margin-right: 40px;
}

`;

export const LogoText = styled.span`
	text-transform: uppercase;
	font-family: Inter;
	color: #E10914;
	width: 75px;
	font-weight: 700;
	font-size: 18px;
	line-height: 18.09px;
	letter-spacing: 1.2px; 
	margin: 0px 0px 0px 10px;
	cursor: default;
`;