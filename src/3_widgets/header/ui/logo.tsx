import { ROUTES } from "@shared/config/routes"
import { Link } from "@shared/ui/link"

export function Logo() {
	return (
		<Link href={ROUTES.HOME} className="text-xl font-semibold">
			recoms
		</Link>
	)
}
