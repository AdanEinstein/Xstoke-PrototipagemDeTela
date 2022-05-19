import { useContext } from "react";
import TipoProdutoContext from "../../contexts/TipoProdutoContext";

export default function Select({ label, inicial, options }) {
	const {setIsPA} = useContext(TipoProdutoContext)
	return (
		<div className="form-floating mb-4">
			<select
				className="form-select"
				id="Select"
				onChange={e => e.target.value === 'PA' ? setIsPA(true) : setIsPA(false) }
			>
				<option selected>{inicial}</option>
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
