import { useState } from "react";
import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";
import Table from "../components/Table";

export default function ListaClientes(props) {
    // const [clientes, setClientes] = useState(props.listaClientesJson)

    // const cabecalho = ['ID', 'CNPJ', 'Razão Social', 'Logradouro', 'Número', 'Cidade', 'UF']

    // const Clientes = (
	// 	<Table cabecalho={cabecalho} classe={"table-dark table-striped"}>
	// 		{clientes.map(cliente => {
	// 				return (
	// 					<tr key={cliente.id}>
	// 						<th scope="row">{cliente.id}</th>
    //                         <td>{cliente.phone}</td>
    //                         <td>{cliente.company.name}</td>
    //                         <td>{cliente.address.street}</td>
    //                         <td>{cliente.address.suite.replace('\D', '')}</td>
    //                         <td>{cliente.address.city}</td>
    //                         <td>SP</td>
	// 						<td>
	// 							<ButtonTeste
	// 								classe={"btn btn-sm btn-warning mx-1"}
	// 								alerta="Editando"
	// 							>
	// 								<i className="bi-pencil-square"></i>
	// 							</ButtonTeste>
	// 							<ButtonTeste
	// 								classe={"btn btn-sm btn-danger"}
	// 								alerta="Deletando"
	// 							>
	// 								<i className="bi-trash3-fill"></i>
	// 							</ButtonTeste>
	// 						</td>
	// 					</tr>
	// 				);
	// 			})}
	// 	</Table>
	// );

	return (
		<Layout
			titulo="Tela com a lista de clientes"
			titulinho="Lista Clientes"
		>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage={"Lista Clientes"}>
				<h2 className="text-white text-center fw-light fs-3">
					Lista de Clientes
				</h2>
				<hr className="text-white" />
				<div className="d-flex justify-content-between align-items-baseline">
					<Input
						label={"Pesquise por Nome ou CNPJ"}
						campo={"cliente"}
						classe={"w-75"}
						style={{ marginRight: 10 }}
					></Input>
					<ButtonTeste
						alerta={"Buscando Clientes"}
						classe={"btn-primary w-25"}
					>
						<span className="d-none d-xl-inline">Buscar </span>
						<i className="bi-search"></i>
					</ButtonTeste>
				</div>
			</Nav>
			<Button
				style={{ top: 10, right: 10 }}
				classe={"btn-success"}
				link={"#"}
			>
				Avançar
			</Button>
			<Button
				style={{ top: 10, left: 10 }}
				classe={"btn-danger"}
				link={"/lista_produtos"}
			>
				Voltar
			</Button>
		</Layout>
	);
}

// export async function getStaticProps(){
//     const listaClientes = await fetch('https://xstoke.vercel.app/api/listaClientesMiddleware')
//     const listaClientesJson = await listaClientes.json()

//     return {
//         props: {
//             listaClientesJson
//         },
//         revalidate: 1
//     }
// }