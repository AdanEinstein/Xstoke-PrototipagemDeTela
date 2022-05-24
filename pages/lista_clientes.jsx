import { useState } from "react";
import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";
import Table from "../components/Table";
import useLinks from "../providers/LinksProvider";

export default function ListaClientes(props) {
	const [clientes, setClientes] = useState(props.listaClientesJson);
	const { links } = useLinks();

	const cabecalho = ["CNPJ", "Razão Social", "Logradouro", "Cidade", "Ações"];

	const Clientes = (
		<Table cabecalho={cabecalho} classe={"table-dark table-striped"}>
			{clientes.map((cliente) => {
				return (
					<tr key={cliente.id}>
						<td className="text-nowrap">
							{cliente.address.zipcode}
						</td>
						<td>{cliente.company.name}</td>
						<td className="d-md-table-cell d-none">
							{cliente.address.street}
						</td>
						<td className="d-md-table-cell d-none">
							{cliente.address.city}
						</td>
						<td>
							<ButtonTeste
								classe={"btn btn-sm btn-warning mx-1"}
								alerta="Editando"
							>
								<i className="bi-pencil-square"></i>
							</ButtonTeste>
							<ButtonTeste
								classe={"btn btn-sm btn-danger"}
								alerta="Deletando"
							>
								<i className="bi-trash3-fill"></i>
							</ButtonTeste>
						</td>
					</tr>
				);
			})}
		</Table>
	);

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
			<Nav atualPage={"Lista Clientes"} />
			<div className="container mt-5">
				<h2 className="text-white text-center fw-light fs-3">
					Lista dos clientes cadastrados
				</h2>
				<hr className="text-white" />
				<div className="d-flex justify-content-between align-items-baseline mx-2">
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
				{Clientes}
			</div>
			<Button
				style={{ top: 10, right: 10 }}
				classe={"btn-success"}
				link={"/nota_fiscal"}
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

export async function getStaticProps() {
	const listaClientes = await fetch(
		"https://xstoke.vercel.app/api/listaClientesMiddleware"
	);
	const listaClientesJson = await listaClientes.json();

	return {
		props: {
			listaClientesJson,
		},
		revalidate: 1,
	};
}
