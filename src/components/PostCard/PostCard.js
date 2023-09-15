import "./style.css"

const PostCard = ({article}) => {
	return (
		<div className="postcard">
			<p>{article}</p>
			<p>test article</p>
		</div>
	);
};

export default PostCard;