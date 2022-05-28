import { createContext, useContext, useState } from "react";

const LinksContext = createContext([
	{ value: "Home" },
	{ value: "Credenciamento" },
	{ value: "Cadastro Produtos" },
	{ value: "Pedido Venda" },
	{ value: "Lista Produtos" },
	{ value: "Lista Clientes" },
	{ value: "Lista Fornecedores" },
	{ value: "Nota Fiscal" },
]);

export default function useLinks() { 
	const context = useContext(LinksContext)
	const [links, setLinks] = useState(context)
	return {
		links,
		setLinks
	}
}
