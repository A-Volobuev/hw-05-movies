import styled from 'styled-components';
import bg from '../../image/bg.jpg'

export const HomeContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

  background-image: url(${bg});
  background-size: cover;
	height: 512px;
`;

export const FirstTitle = styled.h2`
	/* font-family: Roboto; */
	margin: 40px 0px 0px 0px;
	text-transform: uppercase;
	font-weight: 800;
	font-size: 40px;
	line-height: 30.68px;
	letter-spacing: .03em;
	color: #FFFFFF;
	pointer-events: none;
	cursor: default;
`;

export const SecondTitle = styled.h2`
	/* font-family: Roboto; */
	margin: 0px;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 60px;
	line-height: 44.81px;
	letter-spacing: .03em;
	color: #0D0D0D;
	pointer-events: none;
	cursor: default;
`;