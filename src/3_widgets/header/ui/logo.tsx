import { ROUTES } from "@shared/config/routes"
import { Link } from "@shared/ui/link"

export function Logo() {
	return (
		<div className="col-span-2 justify-start">
			<Link className="text-xl font-semibold" href={ROUTES.HOME}>
				recoms
			</Link>
		</div>
	)
}
