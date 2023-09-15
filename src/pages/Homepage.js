import PostGrid from "../components/PostGrid/PostGrid"

const Homepage = (articles) => {
	return (
		<div className="home_page">
			<h1>Home</h1>
			<PostGrid article={articles} />
		</div>
	);
};

export default Homepage;