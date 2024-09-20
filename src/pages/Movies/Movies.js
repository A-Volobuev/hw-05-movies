import { useEffect, useState } from "react";
import { Title, MoviesContainer, BlackTitle, SearchForm, Search, SearchButton } from "./Movies.styled";
import searchMoviesAPI from '../../components/MovieAPI/MovieAPI';
import SearchMoviesList from "pages/Movies/SearchMoviesList/SearchMoviesList";
import { Box } from "utils/Box";
import { useSearchParams } from "react-router-dom";

//! Search НЕ РАБОТАЕТ ФОКУС

const Movies = () => {
	//?  useState не подходит, нужно сохранять значение в поле юрл
	//? const [query, setQuery] = useState('');
	const [page, setPage] = useState(1);
	const [moviesList, setMoviesList] = useState([]);
	const [totalMovies, setTotalMovies] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('query') ?? '';

	const handleSubmitForm = e => {
		e.preventDefault();
		// console.log(e.currentTarget.elements.searchInput.value)
		const searchQuery = e.currentTarget.elements.searchInput.value;

		// Проверка на пустое поле
		if(searchQuery.trim() === '') {
			alert("Введите запрос")
			return
		}

		setSearchParams({query: searchQuery});
		setPage(1);
		
		// console.log(query)
	}

	useEffect(() => {
		if (query === '') {
      return;
    }

		searchMoviesAPI
		.fetchSearchMovie(query, page)
		// .then(console.log)
		.then(res => {
			const {results, total_results} = res;
			if (page > 1) {
        setMoviesList(state => [...state, ...results])
      } else {
        setMoviesList(results);
      }
			setTotalMovies(total_results);
		})
		.catch(error => {
			console.log(error);
		})
	}, [query, page]);

	const onLoadMore = (e) => {
    setPage(state => state + 1);
  };

	return (
		<>
			<MoviesContainer>
				<Title> movie 
					<BlackTitle> search</BlackTitle>
				</Title>

				<SearchForm onSubmit={handleSubmitForm}>
					<Search name="searchInput" type="text" placeholder="🔍 Enter name"/>
					<SearchButton type="submit">Seacrh</SearchButton>
				</SearchForm>
			</MoviesContainer>

			<Box bg="#0D0D0D" p="0px 165px" display="flex" justifyContent="center">
				<Box bg="#FFFFFF" position="relative" top="-112.7px" borderRadius="6px" maxWidth="1068px" minHeight="121px" display="flex" flexDirection="column" alignItems="center">
					<SearchMoviesList movies={moviesList} onLoadMore={onLoadMore} totalMovies={totalMovies} page={page} query={query}/>
				</Box>
			</Box>
		</>
	)
}

export default Movies;