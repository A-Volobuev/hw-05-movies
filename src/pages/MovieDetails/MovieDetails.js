import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Box } from "utils/Box";
import searchMovieByIdAPI from "../../components/MovieAPI/MovieAPI";
import { ReactComponent as BtnBackIcon } from '../../image/btnBackIcon.svg';
import MovieOverview from "./MovieOverview/MovieOverview";
import { BackLink, GoBackButton } from "./MovieDetails.styled";

//! иногда с одного ид приходит другой фильм

const MovieDetails = () => {
	const {movieId} = useParams();
	const [movieDetails, setMovieDetails] = useState();
	const location = useLocation();
	

	useEffect(() => {
		searchMovieByIdAPI
		.fetchMovieById(movieId)
		// .then(console.log)
		.then(setMovieDetails)
		.catch(error => {
			console.log(error);
		})
	}, [movieId]);

	if (!movieDetails) {
		return null;
	}
	const backLinkHref = location.state?.from ?? "/home";
	console.log(location.state)
	return(
		<>
		<Box bg="#0D0D0D" p="68px 165px" display="flex" flexDirection ="column">
			<BackLink to={backLinkHref}>
				<GoBackButton>
					<BtnBackIcon width="12px" height="12px"/>
					Go Back
					</GoBackButton>
			</BackLink>
			
			<MovieOverview movieDetails={movieDetails}/>

			<Outlet/>
		</Box>
		</>
	)
}

export default MovieDetails;