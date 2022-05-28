import { useState } from "react";
import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";
import SelectProd from "../components/personalizados/SelectProd";
import Select from "../components/Select";
import TipoProdutoContext from "../contexts/TipoProdutoContext";
import useLinks from "../providers/LinksProvider";

export default function Produto() {
	const [isPA, setIsPA] = useState(false);
	const [produtos, setProdutos] = useState([]);
	const { setLinks } = useLinks();

	const options = [{ value: "MP" }, { value: "PA" }];

	const mps = [
		{
			value: JSON.stringify({
				descricao: "Materia Prima 1",
				preco: 15.5,
			}),
		},
		{
			value: JSON.stringify({
				descricao: "Materia Prima 2",
				preco: 25.5,
			}),
		},
	];

	function addEstrutura() {
		if (produtos.length === 0) {
			setProdutos([{ id: 0 }]);
		} else {
			const lastProduto = produtos.length;
			setProdutos((oldProdutos) => [...oldProdutos, { id: lastProduto }]);
		}
	}

	function deleteEstrutura(idProduto) {
		setProdutos((oldProdutos) => {
			return oldProdutos.filter((p) => p.id !== idProduto);
		});
	}

	return (
		<Layout titulo={"Tela de cadastro de produtos"} titulinho={"Produtos"}>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage={"Cadastro Produtos"}>
				<TipoProdutoContext.Provider value={{ setIsPA }}>
					<h2 className="text-white text-center fw-light fs-3">
						Cadastre seus produtos aqui!
					</h2>
					<hr className="text-white" />
					<SelectProd
						label="Tipo do produto"
						inicial="Selecione o tipo MP ou PA"
						options={options}
					></SelectProd>
					{!isPA && (<Input label="CNPJ do Fornecedor" campo="fornecedor"></Input>)}
					<Input label="Descrição" campo="descricao"></Input>
					{isPA ? (
						<>
							<Input label="Preço Médio R$" campo="preco"></Input>
							<Input label="Imposto repassado R$" campo="imposto"></Input>
						</>
					) : (
						<>
							<Input label="Valor do custo R$" campo="preco"></Input>
							<Input label="Imposto pago R$" campo="imposto"></Input>
						</>
					)}
					{isPA && (
						<>
							<hr className="text-white" />
							<Input
								label="Tempo estimado para produção"
								campo="tempo"
								type={"time"}
							></Input>
							<div className="d-flex justify-content-between align-items-baseline mb-3">
								<p className="text-white fw-light fs-5">
									Estruturação do PA:
								</p>
								<button
									className="btn btn-success"
									onClick={addEstrutura}
								>
									Adicionar{" "}
									<i className="bi-check-circle-fill"></i>
								</button>
							</div>
							{produtos.map((produto) => {
								return (
									<div
										key={produto?.id}
										className="d-flex justify-content-between align-items-center position-relative"
									>
										<button
											className="position-absolute btn btn-danger"
											style={{
												top: -10,
												right: -10,
												zIndex: 10,
											}}
											onClick={() =>
												deleteEstrutura(produto?.id)
											}
										>
											<i className="bi-trash-fill"></i>
										</button>
										<Select
											label="Matéria Prima"
											inicial="Componha o seu PA aqui"
											options={mps}
											classe="w-75"
										></Select>
										<Input
											style={{ marginLeft: 5 }}
											label="Quantidade"
											campo={"quantidade"}
											classe="w-25"
										></Input>
									</div>
								);
							})}
						</>
					)}
					<div className="d-flex justify-content-between">
						<ButtonTeste
							alerta={"Cancelando cadastro"}
							classe={"btn-danger w-50 mx-1"}
						>
							Cancelar
						</ButtonTeste>
						<ButtonTeste
							alerta={"Cadastrando Produto"}
							classe={"btn-primary w-50 mx-1"}
						>
							Cadastrar
						</ButtonTeste>
					</div>
				</TipoProdutoContext.Provider>
			</Nav>
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
				link={"/credenciamento"}
			>
				Voltar
			</Button>
		</Layout>
	);
}
