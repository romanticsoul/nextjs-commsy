import { ROUTES } from "@shared/config/routes"
import { Link } from "@shared/ui/link"

export function Logo() {
	return (
		<Link
			href={ROUTES.HOME}
			className="col-span-2 flex justify-start text-xl font-semibold"
		>
			recoms
		</Link>
	)
}
