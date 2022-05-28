const listaFornecedoresMiddleware = async (request, response) => {
    const listaFornecedores = await fetch('https://jsonplaceholder.typicode.com/users')
    const listaFornecedoresJson = await listaFornecedores.json()

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    response.json(listaFornecedoresJson)
}

export default listaFornecedoresMiddleware