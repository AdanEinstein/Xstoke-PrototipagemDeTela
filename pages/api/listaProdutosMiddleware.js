function listaProdutosMiddleware(request, response) {
	const listaProdutos = {
		pas: [],
		mps: [],
	};

	for (let index = 1; index < 13; index++) {
		let ale = Math.floor(Math.random() * 50)
		listaProdutos.pas.push({
			id: index,
			descricao: `Produto Acabado ${index}`,
			preco: ale * 0.9,
			imposto: ale * 0.1,
			mps: [
				{
					id: ale,
				},
			],
		});
		listaProdutos.mps.push({
			id: index,
			descricao: `Matéria Prima ${index}`,
			preco: ale * 0.7,
			imposto: ale * 0.3
		});
	}

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

    response.json(listaProdutos);
}

export default listaProdutosMiddleware