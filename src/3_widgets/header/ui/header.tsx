interface HeaderProps {
	children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
	return (
		<header className="bg-background/80 sticky top-0 z-50 border-b py-5 backdrop-blur">
			<div className="container">{children}</div>
		</header>
	)
}
