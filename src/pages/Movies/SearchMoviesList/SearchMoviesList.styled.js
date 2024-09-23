import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import cursorSvg from '../../../image/cursor.svg'

export const MoviesList = styled.ul`
	display:flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 21px;
	list-style-type: none;
`;

export const MoviesListItem = styled.li`
	position: relative;
	margin-bottom: 36px;
	height: 300px;

`;

export const MoviesImg = styled.img`
	width: 240px;
	height: 300px;
	border-radius: 6px;
	
`;



export const MoviesTitleContainer = styled.div`
	position: absolute;
	bottom: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 49px;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	background:rgba(94, 92, 92, 0.34);
	box-shadow: rgba(165, 165, 165, 0.05) 11.9px -11.9px 11.9px inset,  rgba(255, 255, 255, 0.05) -11.9px 11.9px 11.9px inset;
	backdrop-filter: blur(11.305px);

	pointer-events:none;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
	cursor: url(${cursorSvg}), default;
	
  :hover {
    transform: scale(1.1);
		transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover + ${MoviesTitleContainer} {
    transform: scale(1.1);
		bottom: -12px;
		transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const MoviesTitle = styled.h4`
	margin: 0;
	font-weight: 500;
	font-size: 12px;
	line-height: 11.72px;
	letter-spacing: .03em;
	color: #FFFFFF;
	text-align: center;
`;

export const LoadMoreBtn = styled.button`
	padding: 11px 25px;
	margin-bottom: 21px;
	background-color: #D00812;
	max-width: 121px;
	border-radius: 6px;
	border: none;	
	color: #FFFFFF;
	font-size: 14px;
	letter-spacing: 0.03em;
	line-height: 18px;
	font-weight: 700;
	
	cursor: url(${cursorSvg}), default;
`;

export const NotFindTitle = styled.h4`
	margin: 0px;
	text-transform: uppercase;
	color: #0E1721;
	font-size: 16px;
	letter-spacing: 0.03em;
	line-height: 22.4px;
	font-weight: 500;
`;

export const NotFindsubTitle = styled.h5`
	margin: 16px 0px 43px 0px;
	color: #0E1721;
	font-size: 14px;
	letter-spacing: 0.03em;
	line-height: 24px;
	font-weight: 400;
`;

export const NotFindList= styled.ul`
	padding: 0px 0px 0px 21px;
	margin: 0px;
`;

export const NotFindListItem = styled.li`
	color: #0E1721;
	font-size: 14px;
	letter-spacing: 0.03em;
	line-height: 24px;
	font-weight: 400;
`;

