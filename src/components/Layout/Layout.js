import { Box } from "../../utils/Box"
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Suspense } from "react";

const Layout = () => {
	return (
		<Box display="grid" gridTemplateRows="80px 1fr">
			<AppBar/>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet/>
			</Suspense>
		</Box>
	)
}


export default Layout