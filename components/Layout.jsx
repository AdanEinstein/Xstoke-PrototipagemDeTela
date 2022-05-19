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
                <h1 className="fw-bold text-white d-md-block d-none">
                    {titulo}
                </h1>
                <h1 className="fw-bold text-white d-md-none d-block">
                    {titulinho}
                </h1>
            </div>
			<div className="container">
				<div className="row">
					<div className="col-lg-1"></div>
					<div className="col-lg-10 col-12">
						<div className="mx-1" style={styles.divExterna}>
							{children}
						</div>
					</div>
					<div className="col-lg-1"></div>
				</div>
			</div>
		</>
	);
}
