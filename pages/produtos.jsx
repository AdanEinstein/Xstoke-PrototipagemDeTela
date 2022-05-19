import { useState } from "react";
import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Select from "../components/personalizados/Select";
import TipoProdutoContext from "../contexts/TipoProdutoContext";

export default function Produto() {
	const [isPA, setIsPA] = useState(false);
    const [selects, setSelects] = useState(1)
	const links = [
		{ value: "Home" },
		{ value: "Cadastro Clientes" },
		{ value: "Cadastro Produtos", active: true },
	];

	const options = [{ value: "MP" }, { value: "PA" }];

	const mps = [
		{ value: JSON.stringify({ descricao: "Produto 1", preco: 15.5 }) },
		{ value: JSON.stringify({ descricao: "Produto 2", preco: 25.5 }) },
	];

    function addEstrutura(){
        setSelects(selects + 1)
    }

	return (
		<Layout titulo={"Tela de cadastro de produtos"} titulinho={"Produtos"}>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav links={links}>
				<TipoProdutoContext.Provider value={{ setIsPA }}>
					<h1 className="text-white display-6 text-center">
						Cadastre seus produtos aqui!
					</h1>
					<hr className="text-white" />
					<Select
						label="Tipo do produto"
						inicial="Selecione o tipo MP ou PA"
						options={options}
					></Select>
					<Input label="Descrição" campo="descricao"></Input>
					<Input label="Preço" campo="preco"></Input>
					{isPA && (
						<>
							<hr className="text-white" />
							<div className="d-flex justify-content-end">
								<button className="btn btn-success mb-2" onClick={addEstrutura}>
									Adicionar<i className="bi-plus"></i>
								</button>
							</div>
							<Select
								label="Estruturação do PA"
								inicial="Componha o seu PA aqui"
								options={mps}
							></Select>
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
				link={"#"}
			>
				Avançar
			</Button>
			<Button
				style={{ top: 10, left: 10 }}
				classe={"btn-danger"}
				link={"clientes"}
			>
				Voltar
			</Button>
		</Layout>
	);
}
