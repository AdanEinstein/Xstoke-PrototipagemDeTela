import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";
import Input from "../components/Input"

export default function NotaFiscal() {
	// const pedidos = props.pedidos
	const cabecalho = ["CNPJ", "Razão Social", "Logradouro", "Cidade", "Ações"];

	// const Pedidos = (
	// 	<Table cabecalho={cabecalho} classe={"table-dark table-striped"}>
	// 		{pedidos.map((pedido) => {
	// 			return (
	// 				<tr key={pedido.id}>
	// 					<td className="text-nowrap">
	// 						{pedido}
	// 					</td>
	// 					<td>{pedido}</td>
	// 					<td className="d-lg-table-cell d-none">
	// 						{pedido}
	// 					</td>
	// 					<td className="d-md-table-cell d-none">
	// 						{pedido}
	// 					</td>
	// 					<td>
	// 						<ButtonTeste
	// 							classe={"btn btn-sm btn-warning mx-1"}
	// 							alerta="Editando"
	// 						>
	// 							<i className="bi-pencil-square"></i>
	// 						</ButtonTeste>
	// 						<ButtonTeste
	// 							classe={"btn btn-sm btn-danger"}
	// 							alerta="Deletando"
	// 						>
	// 							<i className="bi-trash3-fill"></i>
	// 						</ButtonTeste>
	// 					</td>
	// 				</tr>
	// 			);
	// 		})}
	// 	</Table>
	// );
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
			<Nav atualPage="Nota Fiscal"/>
			<div className="container mt-5">
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
				{/* {Pedidos} */}
			</div>
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
				link={"/lista_clientes"}
			>
				Voltar
			</Button>
		</Layout>
	);
}

// export async function getStaticProps() {
// 	const
	
// 	return {
// 		props: {
// 			pedidos
// 		}
// 	}
// }