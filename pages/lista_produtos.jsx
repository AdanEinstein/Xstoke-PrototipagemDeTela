import { useState, useEffect } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";
import Table from "../components/Table";
import ButtonTeste from "../components/ButtonTeste";

export default function ListaProdutos(props) {
	const [produtos, setProdutos] = useState(props.listaProdutosJson);
	const [alternar, setAlternar] = useState();

	const cabecalho = ["ID", "Descrição", "Preço", "Ações"];

	const PAS = (
		<Table cabecalho={cabecalho} classe={"table-dark table-striped"}>
			{Array.isArray(produtos.pas) &&
				produtos.pas.map((pa) => {
					return (
						<tr key={pa.id}>
							<th scope="row">{pa.id}</th>
							<td>{pa.descricao}</td>
							<td>
								{pa.preco.toLocaleString("pt", {
									minimumFractionDigits: 2,
									style: "currency",
									currency: "BRL",
								})}
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
	const MPS = (
		<Table cabecalho={cabecalho} classe={"table-dark table-striped"}>
			{Array.isArray(produtos.mps) &&
				produtos.mps.map((mp) => {
					return (
						<tr key={mp.id}>
							<th scope="row">{mp.id}</th>
							<td>{mp.descricao}</td>
							<td>
								{mp.preco.toLocaleString("pt", {
									minimumFractionDigits: 2,
									style: "currency",
									currency: "BRL",
								})}
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

	function handleToggle() {
		setAlternar(!alternar);
	}

	return (
		<Layout
			titulo={"Tela com a lista dos produtos"}
			titulinho={"Lista Produtos"}
		>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage={"Lista Produtos"}>
				<div className="container d-flex justify-content-between mb-3">
					<button
						className="btn btn-lg btn-secondary w-50 mx-1"
						onClick={handleToggle}
					>
						PAS
					</button>
					<button
						className="btn btn-lg btn-secondary w-50 mx-1"
						onClick={handleToggle}
					>
						MPS
					</button>
				</div>
				{alternar === undefined ? (
					<h2 className="text-white text-center fw-light fs-4">
						Selecione o tipo de produto para verificar
					</h2>
				) : alternar ? (
					PAS
				) : (
					MPS
				)}
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
				link={"/pedido_venda"}
			>
				Voltar
			</Button>
		</Layout>
	);
}

export async function getStaticProps() {
	const listaProdutos = await fetch(
		"https://xstoke.vercel.app/api/listaProdutosMiddleware"
	);
	const listaProdutosJson = await listaProdutos.json();

	return {
		props: {
			listaProdutosJson,
		},
		revalidate: 1,
	};
}
