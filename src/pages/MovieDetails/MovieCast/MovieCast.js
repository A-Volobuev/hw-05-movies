import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import searchCastByIdAPI from '../../../components/MovieAPI/MovieAPI';
import castDefaultImg from '../../../image/castDefault.svg'
import { CastList, CastListItem, NotFindTitle, ProfileCharacterTitle, ProfileImg, ProfileName } from './MovieCast.styled';

//! Как с Каста вернуться на ссылку откуда мы пришли?

const MovieCast = () => {
	const [movieCast, setMovieCast] = useState();
	const { movieId } = useParams();
	useEffect(() => {
		searchCastByIdAPI
		.fetchCastById(movieId)
		.then(setMovieCast)
		.catch(error => {
			console.log(error);
		})
	}, [movieId]);
	// console.log(movieId)

	if (!movieCast) {
		return null;
	}

	const {cast} = movieCast;
	return (
		<div>
			{/* <button onClick={() => console.log(cast)} >PPPP</button> */}

			{cast.length > 0 && (
				<CastList>
				{cast.map(({id, name, character, profile_path}) => (
					<CastListItem key={id}>
						<ProfileImg src={profile_path !== null ?`https://image.tmdb.org/t/p/w500/${profile_path}` :castDefaultImg } alt={name}></ProfileImg>
						
						<ProfileName>{name}</ProfileName>
						<ProfileCharacterTitle>Character:
							<span>
								{character}
							</span>
						</ProfileCharacterTitle>
						
					</CastListItem>
				))}
			</CastList>
			)}

			{cast.length === 0 && (
				<NotFindTitle>Nothing found</NotFindTitle>
			)}
			
			</div>
	)
}

export default MovieCast;