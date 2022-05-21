function listaProdutosMiddleware(request, response) {
	const listaProdutos = {
		pas: [],
		mps: [],
	};

	for (let index = 0; index < 12; index++) {
		listaProdutos.pas.push({
			id: index,
			descricao: `Produto Acabado ${index}`,
			preco: index * 0.6,
			mps: [
				{
					id: index,
				},
			],
		});
		listaProdutos.mps.push({
			id: index,
			descricao: `Matéria Prima ${index}`,
			preco: index * 0.2,
		});
	}

    response.setHeader('Cache-Control', 's-maxage=10', 'stale-while-revalidate')

    response.json(listaProdutos);
}

export default listaProdutosMiddleware