import { UserPreview } from "@features/user-preview"
import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Link } from "@shared/ui/link"

import { Header } from "./header"
import { Logo } from "./logo"

export function DashboardHeader() {
	return (
		<Header>
			<div className="grid grid-cols-8 items-center">
				<Logo />
				<nav className="col-span-4">
					<ul className="flex justify-center gap-12">
						<li>
							<Link href={ROUTES.HOME}>Overview</Link>
						</li>
						<li>
							<Link href={ROUTES.HOME}>Comments</Link>
						</li>
						<li>
							<Link href={ROUTES.PRICING}>Settings</Link>
						</li>
						<li>
							<Link href={ROUTES.DOCUMENTATION}>Docs</Link>
						</li>
					</ul>
				</nav>
				<div className="col-span-2 flex justify-end gap-2">
					<UserPreview />
				</div>
			</div>
		</Header>
	)
}
