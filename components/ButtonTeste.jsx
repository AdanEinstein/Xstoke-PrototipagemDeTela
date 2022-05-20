export default function ButtonTeste({children, alerta, classe, ...rest}){
    function handleClick(){
        alert(`${alerta}`)
    }

    return (
        <button className={`btn btn-lg ${classe}`} onClick={handleClick}>
            {children}
        </button>
    )
}