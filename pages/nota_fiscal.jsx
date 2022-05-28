import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";
import Input from "../components/Input";
import Table from "../components/Table";

export default function NotaFiscal(props) {
	const pedidos = props.pedidosJson;
	const cabecalho = ["Cliente", "Preço", "Status"];

	const Pedidos = (
		<Table cabecalho={cabecalho} classe={"table-dark table-striped"}>
			{pedidos.map((pedido) => {
				return (
					<tr key={pedido.id}>
						<td className="text-center">{`Cliente ${pedido.cliente}`}</td>
						<td className="text-center">
							{pedido.pas
								.reduce((total, atual) => {
									return (total +=
										atual.id + atual.quantidade * 5.6);
								}, 0)
								.toLocaleString("pt", {
									minimumFractionDigits: 2,
									style: "currency",
									currency: "BRL",
								})}
						</td>
						<td className="text-center">
							{pedido.cliente < 25 ? (
								<ButtonTeste
									classe={"btn btn-sm btn-danger w-100 mx-1"}
									alerta="Emitindo nota fiscal"
								>
									Emitir <i className="bi-info-circle"></i>
								</ButtonTeste>
							) : (
								<ButtonTeste
									classe={"btn btn-sm btn-primary w-100 mx-1"}
								>
									Emitida <i className="bi-check-circle-fill"></i>
								</ButtonTeste>
							)}
						</td>
					</tr>
				);
			})}
		</Table>
	);
	return (
		<Layout
			titulo="Tela para Emissão de Nota Fiscal"
			titulinho="Nota Fiscal"
		>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage="Nota Fiscal" >
			<div className="container">
				<h2 className="text-white text-center fw-light fs-3">
					Lista de pedidos de venda
				</h2>
				<hr className="text-white" />
				<div className="d-flex justify-content-between align-items-baseline mx-2">
					<Input
						label={"Pesquise por Cliente"}
						campo={"cliente"}
						classe={"w-75"}
						style={{ marginRight: 10 }}
					></Input>
					<ButtonTeste
						alerta={"Buscando Pedidos"}
						classe={"btn-primary w-25"}
					>
						<span className="d-none d-xl-inline">Buscar </span>
						<i className="bi-search"></i>
					</ButtonTeste>
				</div>
				{Pedidos}
			</div>
			</Nav>
			<Button
				style={{ top: 10, right: 10 }}
				classe={"btn-warning"}
				link={"/"}
			>
				Retornar
			</Button>
			<Button
				style={{ top: 10, left: 10 }}
				classe={"btn-danger"}
				link={"/lista_fornecedores"}
			>
				Voltar
			</Button>
		</Layout>
	);
}

export async function getStaticProps() {
	const pedidos = await fetch(
		"https://xstoke.vercel.app/api/listaPedidosVendasMiddleware"
	);
	const pedidosJson = await pedidos.json();

	return {
		props: {
			pedidosJson,
		},
		revalidate: 1,
	};
}
