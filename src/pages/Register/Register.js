import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import "./style.css"

const Register = () => {
	return (
		<div className="register_page">
			<h1>Please enter your informations:</h1>
			<div className="register_row_1">
				<Input text="First name..." style="normal" />
				<Input text="Last name..." style="normal" />
			</div>
			<div className="register_row_2">
				<Input text="email adress..." style="normal" />
				<Input text="Password..." style="normal" />
			</div>
			<SubmitButton className="register_submit_button" handleClick={() => {}} />
		</div>
	);
};

export default Register;