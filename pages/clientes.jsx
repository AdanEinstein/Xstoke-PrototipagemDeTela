import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

export default function Cliente() {
	const links = [
		{ value: "Home" },
		{ value: "Cadastro Clientes", active: true },
		{ value: "Cadastro Produtos" },
	];

	return (
		<Layout titulo={"Tela de cadastro de clientes"} titulinho={"Clientes"}>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav links={links}>
				<h1 className="text-white display-6 text-center">
					Cadastre seus clientes aqui!
				</h1>
                <hr className="text-white"/>
				<p className="text-white">
					Informe os dados cadastrais do cliente:
				</p>
				<Input label={"CNPJ:"} campo={"cnpj"}></Input>
				<Input label={"Razão Social:"} campo={"razao"}></Input>
				<Input label={"Logradouro:"} campo={"logradouro"}></Input>
				<Input label={"Número:"} campo={"numero"}></Input>
				<Input label={"Cidade:"} campo={"cidade"}></Input>
				<Input label={"UF:"} campo={"uf"}></Input>
				<div className="d-flex justify-content-between">
					<ButtonTeste
						alerta={"Cancelando cadastro"}
						classe={"btn-danger w-50 mx-1"}
					>
						Cancelar
					</ButtonTeste>
					<ButtonTeste
						alerta={"Cadastrando Cliente"}
						classe={"btn-primary w-50 mx-1"}
					>
						Cadastrar
					</ButtonTeste>
				</div>
			</Nav>
			<Button
				style={{ top: 10, right: 10 }}
				classe={"btn-success"}
				link={"produtos"}
			>
				Avançar
			</Button>
			<Button
				style={{ top: 10, left: 10 }}
				classe={"btn-danger"}
				link={"/"}
			>
				Voltar
			</Button>
		</Layout>
	);
}
