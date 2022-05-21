import Button from "../components/Button";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";

export default function ListaProdutos(){
    return (
        <Layout titulo={'Tela com a lista dos produtos'} titulinho={'Lista Produtos'}>
            <Header>
            <h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
            </Header>
            <Nav atualPage={'Lista Produtos'}>

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
    )
}