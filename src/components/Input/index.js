import "./style.css"

const Input = ({text, style}) => {
	return (
		<div input_div>
			<input className={style} placeholder={text} />
		</div>
	);
};

export default Input;