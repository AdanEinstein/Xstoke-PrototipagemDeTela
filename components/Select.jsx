export default function Select({ label, inicial, options, classe }) {
	return (
		<div className={`form-floating mb-4 ${classe}`}>
			<select
				className="form-select"
				id="Select"
			>
				<option defaultValue>{inicial}</option>
				{options.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.value}
						</option>
					);
				})}
			</select>
			<label htmlFor="Select">{label}</label>
		</div>
	);
}
