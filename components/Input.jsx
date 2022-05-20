export default function Input({label, campo, style, classe, type}) {
	return (
		<div style={style} className={`form-floating mb-4 ${classe}`}>
  			<input type={type ? type : 'text'} className="form-control" id={campo} placeholder={' '}/>
  			<label htmlFor={campo}>{label}</label>
		</div>
	);
}
