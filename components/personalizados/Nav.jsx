import { useEffect } from "react";
import { useState } from "react";
import useLinks from "../../providers/LinksProvider";

export default function Nav({ children, atualPage }) {
	const { links, setLinks } = useLinks();
	const [open, setOpen] = useState(false);

	function handleActive(event) {
		event.currentTarget.classList.toggle("active");
	}

	useEffect(() => {
        setLinks(oldLinks => {
            oldLinks.map(link => {
                link.value === atualPage ? link.active = true : link.active = false
            })
			return [...oldLinks]
        })
    }, [])

	return (
		<div className={`container-fluid ${children ? "" : 'position-relative'}`}>
			<div className={`row ${children ? "row-cols-md-2" : ''}`}>
				<nav
					className={`navbar ${children ? 'col-md-4' : 'position-absolute'} align-items-md-start`} style={children ? { borderBottomLeftRadius: 5, background: "#FFF" } : {zIndex: 10, borderBottomLeftRadius: 5, background: "#FFF"}}
				>
					<div className="container">
						<div className="d-flex justify-content-center btn btn-primary w-100 align-items-center d-block" onClick={() => setOpen(!open)}>
							Menu <i className="bi-list"></i> 
						</div>
						<ul className={`nav nav-pills nav-fill flex-md-column w-100 mt-2 p-2 ${children ? open ? 'd-block' : 'd-md-block d-none' : open ? 'd-block' : 'd-none'}`}
						style={{borderRadius: 5, background: '#222'}}>
							{links.map(link => {
								return (
									<li className="nav-item" key={link.value}>
										<a
											className={`nav-link text-white ${
												link.active ? "active" : null
											}`}
											onClick={handleActive}
										>
											{link.value}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</nav>
				<div className="py-3 px-4 col-md-8">{children}</div>
			</div>
		</div>
	);
}
