export default function Layout({ children, titulo }) {
	const styles = {
		divExterna: {
			borderRadius: "5px",
			backgroundColor: "#222",
            minWidth: 600
		},
	};

	return (
		<>
			<h1 className="my-3 d-flex justify-content-center fw-bold">
				{titulo}
			</h1>
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
