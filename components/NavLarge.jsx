export default function NavLarge({atualPage}) {
	return (
		<nav
			className="navbar align-items-md-start mb-3"
			style={{ borderBottomLeftRadius: 5, background: "#FFF" }}
		>
			<div className="container">
				<div className="d-flex justify-content-center btn btn-primary w-100 align-items-center">
					{atualPage}
				</div>
			</div>
		</nav>
	);
}
