import { createContext, useContext, useState } from "react";

const LinksContext = createContext([
	{ value: "Home" },
	{ value: "Cadastro Clientes" },
	{ value: "Cadastro Produtos" },
	{ value: "Pedido Venda" },
	{ value: "Lista Produtos" },
	{ value: "Lista Clientes" },
]);

export default function useLinks() { 
	const context = useContext(LinksContext)
	const [links, setLinks] = useState(context)
	return {
		links,
		setLinks
	}
}
