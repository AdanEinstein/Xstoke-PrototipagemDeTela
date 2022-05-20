import { useEffect } from "react";
import useLinks from "../../providers/LinksProvider";

export default function Nav({ children, atualPage }) {
	const { links, setLinks } = useLinks();

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
		<div className="container-fluid">
			<div className="row row-cols-md-2">
				<nav
					className="navbar col-md-4 align-items-md-start"
					style={{ borderBottomLeftRadius: 5, background: "#DDD" }}
				>
					<ul className="nav nav-pills nav-fill flex-md-column w-100 p-2 flex-row">
						{links.map(link => {
							return (
								<li className="nav-item" key={link.value}>
									<a
										className={`nav-link ${
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
				</nav>
				<div className="py-3 px-4 col-md-8">{children}</div>
			</div>
		</div>
	);
}
