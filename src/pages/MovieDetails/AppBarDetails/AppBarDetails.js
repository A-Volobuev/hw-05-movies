import { useLocation } from "react-router-dom";
import { NavItem, Title } from "./AppBarDetails.styled";

const { Box } = require("utils/Box")

const AppBarDetails = () => {
	const location = useLocation();
	return (
		<Box>
			<Title>Additional information</Title>
			<Box as="nav" height="44pxs" borderBottom="1px solid #C5C5C5" display="flex">
				<NavItem to="cast" state={{ from: location.pathname }}>Cast</NavItem>
				<NavItem to="reviews" state={{from: location.pathname}}>Reviews</NavItem>
			</Box>
		</Box>
	)
}

export default AppBarDetails;