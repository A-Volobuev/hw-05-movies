import movieDefaultImg from '../../../image/movieDefault.svg'
import { GenresText, GenresTitle, MoviesImg, OverviewText, OverviewTitle, Title, VoteAverage, VoteAveragePoint } from './MovieOverview.styled';
const { Box } = require("utils/Box");

const MovieOverview = ({movieDetails}) => {
	const {poster_path, title, vote_average, overview, genres} = movieDetails
	return(
		<Box bg="#FFFFFF" borderRadius="6px" m="20px 0px 0px 0px" display="grid" gridTemplateColumns="282px 1fr">
			{/* <button onClick={() => console.log(movieDetails)}>OOO</button> */}
			<MoviesImg src={poster_path !== null ?`https://image.tmdb.org/t/p/w500/${poster_path}` :movieDefaultImg }/>
				<Box>
					<Box m="30px 0px 30px 0px">
						<Title>{title}</Title>
						<VoteAverage>Vote Average: <VoteAveragePoint>{vote_average}</VoteAveragePoint></VoteAverage>
					</Box>

					<div>
						<OverviewTitle>Overview</OverviewTitle>
						<OverviewText>{overview}</OverviewText>
					</div>

					<GenresTitle>Genres</GenresTitle>
					<GenresText>{genres.map( genre => (`${genre.name}  ` ))}</GenresText>
					
				</Box>
		</Box>
	)
}

export default MovieOverview