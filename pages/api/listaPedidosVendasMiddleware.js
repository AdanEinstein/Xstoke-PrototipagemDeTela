function ListaPedidosVendasMiddleware(request, response){
    const pedidos = []

    for(let i = 1; i < 13; i++){
        let ale = Math.floor(Math.random() * 50)
        pedidos.push({
            id: i,
            cliente: ale,
            pas: [{
                id: ale * 4,
                quantidade: ale * 3
            },{
                id: ale * 2,
                quantidade: ale
            }]
        })
    }
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    response.json(pedidos)
}

export default ListaPedidosVendasMiddleware;