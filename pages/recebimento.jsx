import Layout from "../components/Layout";
import Header from "../components/Header";
import Nav from "../components/personalizados/Nav";
import Button from "../components/Button";

export default function Recebimento() {
	return (
		<Layout titulo="Tela de Recebimento de Nota" titulinho="Recebimento">
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage={"Recebimento"}>
				<h2 className="text-white text-center fw-light fs-3">
					Recebimento de Nota Fiscal
				</h2>
				<hr className="text-white" />
                <p className="text-white">Selecione o XML da nota recebimento:</p>
				<div class="input-group my-3">
					<input
						type="file"
						class="form-control"
                        accept=".xml"
					/>
				</div>
			</Nav>
			<Button
				style={{ top: 10, right: 10 }}
				classe={"btn-warning"}
				link={"/"}
			>
				Retomar
			</Button>
			<Button
				style={{ top: 10, left: 10 }}
				classe={"btn-danger"}
				link={"/nota_fiscal"}
			>
				Voltar
			</Button>
		</Layout>
	);
}
