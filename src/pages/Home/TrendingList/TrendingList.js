import { useEffect, useState } from 'react';
import trendingMoviesAPI from '../../../components/MovieAPI/MovieAPI';
import { MoviesImg, MoviesList, MoviesListItem, MoviesTitle, MoviesTitleContainer, NavItem } from './TrendingList.styled';
import { Box } from "utils/Box";
import { useLocation } from 'react-router-dom';
// import movieDefault from '../../image/movieDefault.svg'

const TrendingList = () => {
	const [movies, setMovies] = useState([]);
	const location = useLocation();

	useEffect(() => {
		trendingMoviesAPI
		.fetchTrendingMovies()
		// .then(console.log)
		.then(res => {
				const {results} = res;
				return setMovies(results);
			})
		.catch(error => {
			console.log(error);
		})
	}, []);


return (
	<Box bg="#FFFFFF" position="relative" top="-112.7px" borderRadius="6px" maxWidth="1068px">
		<MoviesList> 
			{/* Здесь приходит массив 20 обьектов, где первый обьект супер странный, по этому приходится добавлять вот такие тернарники */}
			{/* <button onClick={() => console.log(movies)}></button> */}
			{movies.map(({id, title, name, poster_path, known_for
}) => (
				<MoviesListItem key={id}>
					<NavItem to={`/movies/${id}`} state={{from:location}}>
						<MoviesImg src={`https://image.tmdb.org/t/p/w500/${known_for? known_for[0].poster_path :poster_path}`}/>
						{/* <MoviesImg src={known_for && known_for[0] && known_for[0].poster_path
							? `https://image.tmdb.org/t/p/w500/${known_for[0].poster_path}`
            : poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : movieDefault
						}/> */}
						<MoviesTitleContainer>
						<MoviesTitle>{known_for? known_for[0].name :title ? title: name }</MoviesTitle>
						</MoviesTitleContainer>
					</NavItem>
				</MoviesListItem>
			))}
		</MoviesList>
	</Box>
)
}

export default TrendingList;