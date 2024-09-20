import { LoadMoreBtn, MoviesImg, MoviesList, MoviesListItem, MoviesTitle, MoviesTitleContainer, NavItem, NotFindList, NotFindListItem, NotFindsubTitle, NotFindTitle } from './SearchMoviesList.styled';
import movieDefaultImg from '../../../image/movieDefault.svg'
import { useLocation } from 'react-router-dom';
import { Box } from 'utils/Box';


const SearchMoviesList = ({movies, onLoadMore, totalMovies, page, query}) => {
	const location = useLocation();
	return (
		<>
			{movies.length > 0 && (
				<>
				<MoviesList>
					{/* <button onClick={()=>console.log(movies, totalMovies)}>OOO</button> */}
					{movies.map(({id, backdrop_path, title}) => (
						<MoviesListItem key={id}>
							<NavItem to={`/movies/${id}`} state={{from:location}}>
								<MoviesImg src={backdrop_path !== null ?`https://image.tmdb.org/t/p/w500/${backdrop_path}` :movieDefaultImg }/>
								<MoviesTitleContainer>
									<MoviesTitle>{title}</MoviesTitle>
								</MoviesTitleContainer>
							</NavItem>
						</MoviesListItem>
					))}
				</MoviesList>

				{totalMovies - page*20 > 20 && (<LoadMoreBtn type="button" onClick={onLoadMore}>Load more</LoadMoreBtn>)}
			</>
			)}

			{totalMovies === 0 && (
					<Box width="1026px" p="21px">
					<NotFindTitle>
					Your query "{query}" did not find anything.
					</NotFindTitle>
					<NotFindsubTitle>
					Proposals:
					</NotFindsubTitle>
					<NotFindList>
						<NotFindListItem>Try different keywords</NotFindListItem>
						<NotFindListItem>Try genre ( comedy, melodrama, sports, drama )</NotFindListItem>
						<NotFindListItem>Try using the name of a movie or TV series, the name of an actor or director</NotFindListItem>
					</NotFindList>
					</Box>
			)}
		</>
	)
}

export default SearchMoviesList;