import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<nav className="menu">
			<Link to={"/"}>home</Link>
			<Link to={"/services"}>services</Link>
			<Link to={"/"}>projects</Link>
			<Link to={"/"}>blog</Link>
			<Link to={"/"}>contact</Link>
		</nav>
	);
};

export default Menu;
