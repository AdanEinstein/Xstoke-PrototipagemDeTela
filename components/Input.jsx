export default function Input({label, campo, placeholder}) {
	return (
		<div className="form-floating mb-4">
  			<input type="email" className="form-control" id={campo} placeholder={' '}/>
  			<label htmlFor={campo}>{label}</label>
		</div>
	);
}
