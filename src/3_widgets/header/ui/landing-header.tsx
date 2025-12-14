import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Link } from "@shared/ui/link"

import { Header } from "./header"
import { Logo } from "./logo"

export function LandingHeader() {
	return (
		<Header>
			<div className="grid grid-cols-8 items-center">
				<Logo />
				<nav className="col-span-4">
					<ul className="flex justify-center gap-12">
						<li>
							<Link href={ROUTES.HOME}>Home</Link>
						</li>
						<li>
							<Link href={ROUTES.HOME}>About</Link>
						</li>
						<li>
							<Link href={ROUTES.PRICING}>Pricing</Link>
						</li>
						<li>
							<Link href={ROUTES.DOCUMENTATION}>Docs</Link>
						</li>
					</ul>
				</nav>
				<div className="col-span-2 flex justify-end gap-2">
					<Button asChild size="lg">
						<Link href={ROUTES.AUTH}>Login</Link>
					</Button>
				</div>
			</div>
		</Header>
	)
}
