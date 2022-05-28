import { useContext } from "react";
import TipoCredencialContext from "../../contexts/TipoCredencialContext";

export default function Select({ label, inicial, options }) {
	const {setIsFornecedor} = useContext(TipoCredencialContext)
	return (
		<div className="form-floating mb-4">
			<select
				className="form-select"
				id="Select"
                onChange={e => e.target.value === 'Fornecedor' ? setIsFornecedor(true) : setIsFornecedor(false)}
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
