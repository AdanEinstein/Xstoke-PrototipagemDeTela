export default function ButtonTeste({children, alerta, classe}){
    function handleClick(){
        alert(`${alerta}`)
    }

    return (
        <button className={`btn btn-lg ${classe}`} onClick={handleClick}>
            {children}
        </button>
    )
}