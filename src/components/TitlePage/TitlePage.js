import "./style.css"
import { Link, Outlet } from "react-router-dom";

const TitlePage = () => {
	return (
		<header>
			<div className="title_page">
				<h1>Éval News Network</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/news">News</Link>
						</li>
							<Link to="/register">Register</Link>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>

				<Outlet />
			</div>
		</header>
	);
};

export default TitlePage;