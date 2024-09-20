import TrendingList from "./TrendingList/TrendingList";
import { Box } from "utils/Box";
import { HomeContainer, FirstTitle, SecondTitle } from "./Home.styled"

const Home = () => {
	return (
		<>
			<HomeContainer>
				<FirstTitle>TRENDING</FirstTitle>
				<SecondTitle>TODAY</SecondTitle>
			</HomeContainer>

			<Box bg="#0D0D0D" p="0px 165px" display="flex" justifyContent="center">
				<TrendingList/>
			</Box>
		</>
	)
}

export default Home;