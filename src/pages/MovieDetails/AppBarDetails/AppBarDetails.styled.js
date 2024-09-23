import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import cursorSvg from '../../../image/cursor.svg';

export const Title = styled.h3`
	text-transform: uppercase;
	margin: 21px 0px 18px 0px;
	font-weight: 500;
	font-size: 16px;
	line-height: 22.4px;
	letter-spacing: .03em;
	color: #0E1721;
`;

export const NavItem = styled(NavLink)`
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: .01em;
	padding: 10px 15px;
	color: #0E1721;
	text-decoration: none;
	position: relative;

	cursor: url(${cursorSvg}), default;

	&.active{
		color: #E10914;
		font-weight: 500;
	}

	&.active::after{
		content: "";
		position: absolute;
		bottom: 0;
    left: 0;
		border-bottom: 3px solid #E10914;
		display: block;
		width: 100%;
	}

	:hover{
		color:#FF7E85;
	}
`;