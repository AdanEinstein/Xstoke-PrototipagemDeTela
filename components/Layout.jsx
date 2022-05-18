export default function Layout({ children, titulo, titulinho }) {
	const styles = {
		divExterna: {
			borderRadius: "5px",
			backgroundColor: "#222",
		},
	};

	return (
		<>
			<div className="my-3 d-flex justify-content-center">
                <h1 className="fw-bold d-md-block d-none">
                    {titulo}
                </h1>
                <h1 className="fw-bold d-md-none d-block">
                    {titulinho}
                </h1>
            </div>
			<div className="row w-100">
				<div className="col-lg-3"></div>
				<div className="col-lg-6 col-md-12">
					<div className="mx-2" style={styles.divExterna}>
						{children}
					</div>
				</div>
				<div className="col-lg-3"></div>
			</div>
		</>
	);
}
