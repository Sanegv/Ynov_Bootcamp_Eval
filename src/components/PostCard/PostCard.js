import "./style.css"

const PostCard = ({article}) => {
	return (
		<div className="postcard">
			<p>{article.title}</p>
			<img src={article.picture} />
		</div>
	);
};

export default PostCard;