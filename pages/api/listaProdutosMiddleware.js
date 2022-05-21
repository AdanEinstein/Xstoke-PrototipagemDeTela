export function listaProdutosMiddleware(req, res) {
	const listaProdutos = {
		pas: [],
		mps: [],
	};

	for (let index = 0; index < 1000; index++) {
		listaProdutos.pas.push({
			id: index,
			descricao: `Produto ${index}`,
			preco: index * 0.6,
			mps: [
				{
					id: index,
				},
			],
		});
		listaProdutos.mps.push({
			id: index,
			descricao: `Produto ${index}`,
			preco: index * 0.2,
		});
	}

	res.json(listaProdutos);
}
