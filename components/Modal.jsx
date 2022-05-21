export default function Modal({titulo, children, botao}) {
	return (
		<div className="modal" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{titulo}</h5>
						<button
							type="button"
							className="btn-close"
						></button>
					</div>
					<div className="modal-body">
						{children}
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
						>
							Voltar
						</button>
						{botao ? (<button type="button" className="btn btn-primary">
							{botao}
						</button>) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
