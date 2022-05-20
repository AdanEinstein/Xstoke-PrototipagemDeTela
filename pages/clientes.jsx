import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";
import useLinks from "../providers/LinksProvider";

export default function Cliente() {
	const {setLinks} = useLinks()

	return (
		<Layout titulo={"Tela de cadastro de clientes"} titulinho={"Clientes"}>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage={'Cadastro Clientes'}>
				<h2 className="text-white text-center fw-light fs-3">
					Cadastre seus clientes aqui!
				</h2>
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
				link={"/produtos"}
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
