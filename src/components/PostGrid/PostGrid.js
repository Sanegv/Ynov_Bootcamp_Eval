import "./style.css"
import PostCard from "../PostCard/PostCard"

const PostGrid = (articles) => {
	return (
		<div className="post_grid">
			{articles.map(
				(article) => (
					<div><PostCard article={article} />
					<p>test</p></div>
				)
			)}
		</div>
	);
};

export default PostCard;