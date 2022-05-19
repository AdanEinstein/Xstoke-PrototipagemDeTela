export default function Header({ children }) {
	return (
		<header
			className="bg-primary bg-gradient p-2 d-flex justify-content-center shadow"
			style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
		>
			{children}
		</header>
	);
}
