import { useState } from "react";
import Button from "../components/Button";
import ButtonTeste from "../components/ButtonTeste";
import Header from "../components/Header";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Nav from "../components/personalizados/Nav";
import Select from "../components/Select";
import useLinks from "../providers/LinksProvider";

export default function PedidoVenda() {
	const { setLinks } = useLinks();
	const [selects, setSelects] = useState([]);

	const pas = [
		{
			value: JSON.stringify({
				descricao: "Produto Acabado 1",
				preco: 150.5,
			}),
		},
		{
			value: JSON.stringify({
				descricao: "Produto Acabado 2",
				preco: 250.5,
			}),
		},
	];

    function addPedido(){
        setSelects(selects => {
            const index = selects.push({})
            selects[index - 1].id = index - 1
            return [...selects]
        })
    }

    function deletePedido(idPedido){
        setSelects(selects => {
            return selects.filter(select => select.id !== idPedido)
        })
    }

	return (
		<Layout titulo={"Tela de Pedido de Venda"} titulinho={"Pedido Venda"}>
			<Header>
				<h1 className="text-white" style={{ fontSize: 60 }}>
					<i className="bi bi-boxes mx-2" />
					Xstoke
				</h1>
			</Header>
			<Nav atualPage={"Pedido Venda"}>
				<h2 className="text-white text-center fw-light fs-3">
					Abra o pedido de venda aqui!
				</h2>
				<hr className="text-white" />
				<p className="text-white">
					Informe os dados necessários para o abrir o pedido:
				</p>
				<div className="d-flex justify-content-between align-items-baseline">
					<Input
						label={"Cliente ou CNPJ do requerente"}
						campo={"cliente"}
						classe={'w-75'}
						style={{marginRight: 10}}
					></Input>
					<ButtonTeste
						alerta={'Buscando Clientes'}
						classe={'btn-primary w-25'}>
							<span className="d-none d-xl-inline">Buscar </span>
							<i className="bi-search"></i>
					</ButtonTeste>
				</div>
				<hr className="text-white" />
				<div className="d-flex justify-content-between align-items-baseline mb-3">
					<p className="text-white fw-light fs-5">
						Estruturação do pedido de venda:
					</p>
					<button className="btn btn-success" onClick={addPedido}>
						Adicionar <i className="bi-check-circle-fill"></i>
					</button>
				</div>
				{selects.map((select) => {
					return (
						<div
							key={select?.id}
							className="d-flex justify-content-between position-relative"
						>
							<button
								className="position-absolute btn btn-danger"
								style={{
									top: -10,
									right: -10,
									zIndex: 10,
								}}
								onClick={() => deletePedido(select?.id)}
							>
								<i className="bi-trash-fill"></i>
							</button>
							<Select
								label="Produto Acabado"
								inicial="Selecione o produto pedido"
								options={pas}
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
				{selects.length > 0 ? (
					<div className="d-flex justify-content-between">
					<ButtonTeste
						alerta={"Cancelando cadastro"}
						classe={"btn-danger w-50 mx-1"}
					>
						Cancelar
					</ButtonTeste>
					<ButtonTeste
						alerta={"Cadastrando Pedido"}
						classe={"btn-primary w-50 mx-1"}
					>
						Enviar
					</ButtonTeste>
				</div>
				) : null}
			</Nav>
			<Button
				style={{ top: 10, right: 10 }}
				classe={"btn-success"}
				link={"/lista_produtos"}
			>
				Avançar
			</Button>
			<Button
				style={{ top: 10, left: 10 }}
				classe={"btn-danger"}
				link={"/produtos"}
			>
				Voltar
			</Button>
		</Layout>
	);
}
