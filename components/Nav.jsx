export default function Nav({ children, links }) {

    function handleActive(event){
        event.currentTarget.classList.toggle('active')
    }

	return (
		<div className="container-fluid">
			<div className="row row-cols-md-2">
				<nav className="navbar col-md-4 align-items-md-start" style={{borderBottomLeftRadius: 5, background: "#FFF"}}>
					<ul className="nav nav-pills nav-fill flex-md-column w-100 p-2 flex-row">
						{links.map((link) => {
							return (
								<li className="nav-item" key={link.value}>
									<a className={`nav-link ${link.active ? 'active' : null}`} onClick={handleActive}>{link.value}</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="py-3 px-4 col-md-8">{children}</div>
			</div>
		</div>
	);
}
