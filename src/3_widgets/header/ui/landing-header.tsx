import { AuthButtons } from "./auth-buttons"
import { Header } from "./header"
import { Logo } from "./logo"
import { NavigationMenu } from "./navigation-menu"

export function LandingHeader() {
	return (
		<Header>
			<div className="grid grid-cols-8 items-center">
				<Logo />
				<NavigationMenu />
				<AuthButtons />
			</div>
		</Header>
	)
}
