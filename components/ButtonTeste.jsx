export default function ButtonTeste({children, alerta, classe, ...rest}){
    function handleClick(){
        alerta ? alert(`${alerta}`) : null
    }

    return (
        <button className={`btn btn-lg ${classe}`} onClick={handleClick}>
            {children}
        </button>
    )
}