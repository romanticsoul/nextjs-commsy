import { ROUTES } from "@shared/config/routes"
import { Link } from "@shared/ui/link"

export function NavigationMenu() {
	return (
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
	)
}
