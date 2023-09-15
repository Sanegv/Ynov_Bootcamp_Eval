import "./style.css"
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";

const Contact = () => {
	return (
		<div className="contact_page">
			<h1>Contact me!</h1>
			<div className="contact_row_1">
				<Input text="Firstname..." style="normal" />
				<Input text="Lastname..." style="normal" />
			</div>
			<div className="contact_row_2">
				<Input text="Object..." style="long" />
			</div>
			<div className="contact_row_3">
				<Input text="What do you want to tell me?" style="big" />
			</div>
			<SubmitButton handleClick={() => {}}/>
		</div>
	);
};

export default Contact;