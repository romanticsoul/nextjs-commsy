import { AuthButtons } from "./auth-buttons"
import { Logo } from "./logo"
import { NavigationMenu } from "./navigation-menu"

export function LandingHeader() {
	return (
		<header className="border-border h-20 border-b">
			<div className="container">
				<div className="flex h-full items-center justify-between">
					<Logo />
					<NavigationMenu />
					<AuthButtons />
				</div>
			</div>
		</header>
	)
}
