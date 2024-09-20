const tranding_url = 'https://api.themoviedb.org/3/trending/all/day?include_adult=false&language=en-US';
const tranding_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDU4MmYwOTJiMTEwOWYzYWJlMWQxNTI3ZDE2MjkzOSIsIm5iZiI6MTcyNjY1MzU2MC4wMTUyMzcsInN1YiI6IjY2ZTlhODM4YjI5MTdlYjE4MDBhZWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw4nVcdglVIbz97dpaNZKg3feXT2TpAK9v8feqM56M4'
  }
};
const search_url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDU4MmYwOTJiMTEwOWYzYWJlMWQxNTI3ZDE2MjkzOSIsIm5iZiI6MTcyNjY1MzU2MC4wMTUyMzcsInN1YiI6IjY2ZTlhODM4YjI5MTdlYjE4MDBhZWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw4nVcdglVIbz97dpaNZKg3feXT2TpAK9v8feqM56M4'
  }
};

const searchById_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDU4MmYwOTJiMTEwOWYzYWJlMWQxNTI3ZDE2MjkzOSIsIm5iZiI6MTcyNjY1MzU2MC4wMTUyMzcsInN1YiI6IjY2ZTlhODM4YjI5MTdlYjE4MDBhZWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw4nVcdglVIbz97dpaNZKg3feXT2TpAK9v8feqM56M4'
  }
};

function fetchTrendingMovies () {
	return fetch(tranding_url, tranding_options)
		.then(res => {
			if (res.ok){
				return res.json();
			}

			return Promise.reject( new Error(`Произошла ошибка`))
		})
}

function fetchSearchMovie (query, page){
	return fetch(`${search_url}&query=${query}&page=${page}`, OPTIONS)
	.then(res => {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(new Error(`Нет фильмов по запросу ${query}`))
	})
} 

function fetchMovieById (movieId) {
	// return fetch(`${searchById_url}${movieId}?`, searchById_options)
	return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, searchById_options)
	.then(res => {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(new Error(`Фильм с id ${movieId} не найден`))
	})
}

function fetchCastById (movieId) {
	return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, OPTIONS)
	.then(res => {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(new Error(`Актеров фильма ${movieId} не найдено`))
	})
}

function fetchReviewsById (movieId) {
	return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, OPTIONS)
	.then(res => {
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(new Error(`Отзывов о фильме ${movieId} не найдено`))
	})
}

const api = {
	fetchTrendingMovies,
	fetchSearchMovie,
	fetchMovieById,
	fetchCastById,
	fetchReviewsById
}

export default api;