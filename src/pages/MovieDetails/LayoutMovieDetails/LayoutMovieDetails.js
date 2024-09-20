const { Outlet } = require("react-router-dom")
const { Box } = require("utils/Box")
const { default: AppBarDetails } = require("../AppBarDetails/AppBarDetails")

const LayoutMovieDetails = () => {
	return (
			<Box display="flex" flexDirection="column"  bg="#FFFFFF" borderRadius="6px" m="20px 0px 0px 0px" p="0px 21px">
			<AppBarDetails/>
			<Outlet/>
		</Box>
	)
}

export default LayoutMovieDetails;