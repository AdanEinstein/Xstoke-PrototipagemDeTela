import Button from "../components/Button";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";

export default function ListaFornecedores() {
	// const [fornecedores, setFornecedores] = useState(props.listaFornecedoresJson);
    // const cabecalho = ["CNPJ", "Razão Social", "Logradouro", "Cidade", "Ações"];

	// const Fornecedores = (
	// 	<Table cabecalho={cabecalho} classe={"table-dark table-striped"}>
	// 		{fornecedores.map((fornecedor) => {
	// 			return (
	// 				<tr key={fornecedor.id}>
	// 					<td className="text-nowrap">
	// 						{fornecedor.address.zipcode}
	// 					</td>
	// 					<td className="text-center">{fornecedor.company.name}</td>
	// 					<td className="text-center d-md-table-cell d-none">
	// 						{fornecedor.address.street}
	// 					</td>
	// 					<td className="text-center d-md-table-cell d-none">
	// 						{fornecedor.address.city}
	// 					</td>
	// 					<td className="text-center">
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
		<Layout titulo={"Lista de Fornecedores"} titulinho={"Fornecedores"}>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage={"Lista Fornecedores"} />
			<div className="container mt-5">
				<h2 className="text-white text-center fw-light fs-3">
					Lista dos fornecedores cadastrados
				</h2>
				<hr className="text-white" />
				<div className="d-flex justify-content-between align-items-baseline mx-2">
					<Input
						label={"Pesquise por Nome ou CNPJ"}
						campo={"fornecedor"}
						classe={"w-75"}
						style={{ marginRight: 10 }}
					></Input>
					<ButtonTeste
						alerta={"Buscando Fornecedores"}
						classe={"btn-primary w-25"}
					>
						<span className="d-none d-xl-inline">Buscar </span>
						<i className="bi-search"></i>
					</ButtonTeste>
				</div>
				{/* {Fornecedores} */}
			</div>
			<Button
				style={{ top: 10, right: 10 }}
				classe={"btn-success"}
				link={"/pedido_venda"}
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

// export async function getStaticProps(){
    
    
//     return {
//         props: {
//             listaFornecedoresJson
//         }
//     }
// }