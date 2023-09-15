import PostGrid from "../components/PostGrid/PostGrid"

const Homepage = () => {
	const articles = "test articles"
	return (
		<div className="home_page">
			<h1>Home</h1>
			<PostGrid articles={articles} />
		</div>
	);
};

export default Homepage;