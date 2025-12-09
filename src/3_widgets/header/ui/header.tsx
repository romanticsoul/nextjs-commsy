interface HeaderProps {
	children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
	return (
		<header className="py-5">
			<div className="container">{children}</div>
		</header>
	)
}
