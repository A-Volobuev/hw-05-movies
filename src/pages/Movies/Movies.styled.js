import styled from 'styled-components';
import bg from '../../image/bg.jpg'

export const MoviesContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

  background-image: url(${bg});
  background-size: cover;
	height: 512px;
`;

export const Title = styled.h2`
	font-family: Roboto;
	margin: 35px 0px 0px 0px;
	text-transform: uppercase;
	font-weight: 800;
	font-size: 24px;
	line-height: 20.2px;
	letter-spacing: .03em;
	color: #FFFFFF;
	pointer-events: none;
	cursor: default;
`;

export const BlackTitle = styled.span`
	color: #0D0D0D;
`;

export const SearchForm = styled.form`
	margin: 11px 0px;
	display: flex;
	gap:15px;
`;

export const Search = styled.input`
	padding: 11px 16px;

	width: 288px;
	border-radius: 6px;
	border: 1px solid rgb(197, 197, 197);
	background: rgb(244, 244, 244);

	font-size: 14px;
	letter-spacing: 0.16px;
	line-height: 18px;

	&:hover, &:focus, &:focus-visible, &:active {
		border: 1px solid rgb(225, 9, 20);
		cursor: pointer;
	}
	
`;

export const SearchButton = styled.button`
	padding: 11px 25px;
	color: #FFFFFF;
	background-color: #E10914;
	border-radius: 6px;
	border: none;

	font-size: 14px;
	letter-spacing: 0.03em;
	line-height: 18px;
	font-weight: 700;

	cursor: pointer;
`;