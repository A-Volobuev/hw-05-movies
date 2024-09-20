import styled from 'styled-components';

export const CommentsList = styled.ul`
	list-style-type: none;
	padding: 0px;
`;

export const CommentsListItem = styled.li`
	margin-top:20px;
	display: flex;
`;

export const CommentsImg = styled.img`
	height: 75px;
	width: 75px;
	border-radius: 50%;
`;

export const CommentsBox = styled.div`
	padding: 0px 0px 0px 10px;
`;

export const Comments = styled.div`
    border-radius: 4px;
    border-top-left-radius: 1px;
    font-size: 13px;
    font-weight: 400;
    resize: vertical;
    line-height: 20px;
    position: relative;
    text-transform: none;
    padding: 20px 19px 15px;
    border: 1px solid #e2e2e4;

	&::before{
    top: -2px;
    left: -6px;
    z-index: 2;
    content: '';
    position: absolute;
    background: url(../../../image/comment.svg) no-repeat 0 0;
    background-size: 7px 11px;
    width: 7px;
    height: 11px;
    vertical-align: middle;
}
`;

export const CommentsName = styled.p`
	margin: 0px 0px 10px 0px;
	font-size: 16px;
  font-weight: 500;
	line-height: 20.8px;
	letter-spacing: .03em;
	text-transform: uppercase;
	color: #7F8E9D;
`;

export const NotFindTitle = styled.h5`
	margin: 0px;
	padding: 21px 0px;
	/* font-family: Roboto; */
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: .03em;
	color: #0E1721;
`;