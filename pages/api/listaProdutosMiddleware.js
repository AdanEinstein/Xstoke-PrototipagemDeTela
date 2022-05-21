function listaProdutosMiddleware(request, response) {
	const listaProdutos = {
		pas: [],
		mps: [],
	};

	for (let index = 0; index < 100; index++) {
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

    response.json(listaProdutos);
}

export default listaProdutosMiddleware