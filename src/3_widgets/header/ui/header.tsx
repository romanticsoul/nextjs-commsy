interface HeaderProps {
	children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
	return (
		<header className="bg-background/90 sticky top-0 border-b py-5 backdrop-blur">
			<div className="container">{children}</div>
		</header>
	)
}
