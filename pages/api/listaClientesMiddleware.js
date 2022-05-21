async function listaClientesMiddleware(request, response){
    const listaClientes = await fetch('https://jsonplaceholder.typicode.com/users')
    const listaClientesJson = await listaClientes.json()

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    response.json(listaClientesJson)
}

export default listaClientesMiddleware