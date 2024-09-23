import styled from 'styled-components';


export const CastList = styled.ul`
	list-style-type: none;
	padding: 0px;
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
`;

export const CastListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
  flex-wrap: wrap;
	width: 158px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 6px;
	border-radius: 6px;
`;

export const ProfileImg = styled.img`
	width: 158px;
	height: 206px;
	border-radius:6px ;
	object-fit: cover;
`;

export const ProfileName = styled.h5`
	margin: 5px 0px 0px 0px;
	text-align: center;
	font-weight: 600;
	font-size: 14px;
	line-height: 15.6px;
	letter-spacing: .03em;
	color: #0E1721;
`;

export const ProfileCharacterTitle= styled.p`
	margin: 0px 0px 10px 0px;
	text-align: center;
	font-weight: 500;
	font-size: 12px;
	line-height: 13px;
	letter-spacing: .01em;
	color: #7F8E9D;

	span{
		color: #0E1721;
	}
`;


export const NotFindTitle = styled.h5`
	margin: 0px;
	padding: 21px 0px;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: .03em;
	color: #0E1721;
`;