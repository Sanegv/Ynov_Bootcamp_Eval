import "./style.css"

const SubmitButton = ({handleClick}) => {
	return (
		<button className="submit_button" onClick={handleClick}>Submit</button>
	);
};

export default SubmitButton;