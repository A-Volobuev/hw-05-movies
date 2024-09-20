import reviewDefaultImg from '../../../image/reviewsDefault.svg'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import searchReviewByIdAPI from '../../../components/MovieAPI/MovieAPI';
import { Comments, CommentsBox, CommentsImg, CommentsList, CommentsListItem, CommentsName, NotFindTitle } from './MovieReviews.styled';

const MovieReview = () => {
	const [movieReview, setMovieReview] = useState();
	const { movieId } = useParams();

	
	useEffect(() => {
		searchReviewByIdAPI
		.fetchReviewsById(movieId)
		.then(setMovieReview)
		.catch(error => {
			console.log(error);
		})
	}, [movieId]);
	// console.log(movieId)

	if (!movieReview) {
		return null;
	}

	const {results} = movieReview;
	return (
		<div>
			{/* <button onClick={() => console.log(results)} >PPPP</button> */}

			{results.length > 0 && (
				<CommentsList>
				{results.map(({author_details, content, id}) => (
					<CommentsListItem key={id}>
						<CommentsImg src={author_details.avatar_path !== null ?`https://image.tmdb.org/t/p/w500/${author_details.avatar_path}` :reviewDefaultImg } alt={author_details.username}/>
						<CommentsBox>
							<CommentsName>{author_details.username}</CommentsName>
							<Comments>{content}</Comments>
						</CommentsBox>
					</CommentsListItem>
				))}
			</CommentsList>
			)}
			
			{results.length === 0 && (
				<NotFindTitle>Nothing found</NotFindTitle>
			)}
			
			</div>
	)
}

export default MovieReview;