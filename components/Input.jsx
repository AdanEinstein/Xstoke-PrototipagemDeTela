export default function Input({label, campo}) {
	return (
		<div className="form-floating mb-4">
  			<input type="email" className="form-control" id={campo} />
  			<label htmlFor={campo}>{label}</label>
		</div>
	);
}
