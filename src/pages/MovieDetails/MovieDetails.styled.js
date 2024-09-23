import styled from 'styled-components';
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
	text-decoration: none;
	font-weight: 500;
	font-size: 10px;
	line-height: 18px;
	letter-spacing: .03em;
	color: #0E1721;
`;

export const GoBackButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 4px 8px 4px 10px;
	gap: 7px;
	border-radius: 6px;
`;