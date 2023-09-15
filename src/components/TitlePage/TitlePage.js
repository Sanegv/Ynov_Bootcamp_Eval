import "./style.css"
import { Link, Outlet } from "react-router-dom";

const TitlePage = () => {

	var title = window.location.pathname;
	title == "/" ? (title = "Home") : (title = title.substring(1));

	return (
		<header className="header_main">
			<div className="header_main_div">
				<h1 className="header_main_title">Éval News Network</h1>
				<h2 className="header_page_title">{title}</h2>
				<nav className="header_nav">
					<ul className="header_list">
						<li className="item_nav">
							<Link className="item_link" to="/">Home</Link>
						</li>
						<li className="item_nav">
							<Link className="item_link" to="/news">News</Link>
						</li>
						<li className="item_nav">
							<Link className="item_link" to="/register">Register</Link>
						</li>
						<li className="item_nav">
							<Link className="item_link" to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
				<Outlet />
		</header>
	);
};

export default TitlePage;