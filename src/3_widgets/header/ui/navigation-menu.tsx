import { ROUTES } from "@shared/config/routes"
import { Link } from "@shared/ui/link"

export function NavigationMenu() {
	return (
		<nav>
			<ul className="flex gap-12">
				<li>
					<Link href={ROUTES.HOME}>Home</Link>
				</li>
				<li>
					<Link href={ROUTES.HOME}>About</Link>
				</li>
				<li>
					<Link href={ROUTES.HOME}>Pricing</Link>
				</li>
				<li>
					<Link href={ROUTES.HOME}>Docs</Link>
				</li>
			</ul>
		</nav>
	)
}
