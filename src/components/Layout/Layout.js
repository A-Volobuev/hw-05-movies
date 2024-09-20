import { Box } from "../../utils/Box"
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
	return (
		<Box display="grid" gridTemplateRows="80px 1fr">
			<AppBar/>
			<Outlet/>
		</Box>
	)
}

export default Layout