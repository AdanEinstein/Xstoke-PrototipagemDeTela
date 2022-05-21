async function listaClientesMiddleware(req, res){
    const listaClientes = await fetch('https://jsonplaceholder.typicode.com/users')
    const listaClientesJson = await listaClientes.json()

    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    res.json(listaClientesJson)
}

export default listaClientesMiddleware