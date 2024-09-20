import { Box } from "utils/Box";
import { LogoText, NavItem } from "./AppBar.styled";
import { ReactComponent as LogoIcon } from '../../image/logo.svg';

const AppBar = () => {
	return (
		<Box  
		display="flex"
		alignItems="center"
		justifyContent="space-between" 
		p="0px 165px"
		as="header" 
		bg="#0D0D0D" 
		borderBottom="1px solid #FFFFFF33">
			<Box 
			display="flex"
			alignItems="end">
				<LogoIcon 
				height={40}
				width={38.95}/>
				<LogoText>RABBIT FILM</LogoText>
			</Box>

			<Box as="nav" display="flex">
				<NavItem to="home"> Home </NavItem>
				<NavItem to="movies"> Movies </NavItem>
			</Box>
		</Box>
	)
}

export default AppBar