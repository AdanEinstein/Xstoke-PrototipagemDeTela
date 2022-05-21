export default function Table({cabecalho, children, classe}){
    return (
        <table className={`table ${classe}`}>
            <thead>
                <tr>
                    {cabecalho.map(th => {
                        return (
                            <th className="d-lg-table-cell d-none" key={th} scope="col">{th}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}