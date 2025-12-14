interface HeaderProps {
	children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 border-b bg-background/80 py-5 backdrop-blur">
			<div className="container">{children}</div>
		</header>
	)
}
