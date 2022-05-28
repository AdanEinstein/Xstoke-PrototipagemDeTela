import Layout from "../components/Layout";
import Button from "../components/Button";
import Nav from "../components/personalizados/Nav";
import Header from "../components/Header";
import useLinks from "../providers/LinksProvider";

export default function Home() {
	const {setLinks} = useLinks()

	return (
		<Layout titulo={"Tela Inicial"} titulinho={"Home"}>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage={'Home'}>
				<h2 className="text-white d-none d-md-block fw-light">
					Sistema Integrado de Gerenciamento de Estoque
				</h2>
				<h2 className="text-white d-block d-md-none fw-light">
					Gerenciamento de Estoque
				</h2>
				<hr className="text-white" />
				<p className="text-white">
					Não sou apenas um sistema qualquer de estoque comigo você
					pode, além de controlar o seu estoque de maneira simples,
					fácil e rápida você também pode, cadastrar as estruturas dos
					PA's (Produtos Acabados) compondo os mesmos com todas as
					MP's (Matérias Primas também previamente cadastradas)
					necessárias indicando as quantidades para produção e tempo
					de conclusão.
				</p>
                <p className="text-white">
                    Comigo você também pode cadastrar clientes, iniciar os pedidos de vendas e então eu me encarregarei de iniciar a ordem de produção atualizando os dados do estoque e retornando o tempo de conclusão e uma vez concluída a produção e lançamento da mesma uma nota fiscal será emitida para concretizar sua venda.
                </p>
				<figure className="text-end text-white">
					<blockquote className="blockquote">
						<p>
                        Por isso que sou mais que um sistema de estoque sou Xstoke!
						</p>
					</blockquote>
					<figcaption className="blockquote-footer">
						<cite title="Source Title">Xstoke</cite>
					</figcaption>
				</figure>
			</Nav>
			<Button
				style={{ top: 10, right: 10 }}
				classe={"btn-success"}
				link={"credenciamento"}
			>
				Avançar
			</Button>
		</Layout>
	);
}
