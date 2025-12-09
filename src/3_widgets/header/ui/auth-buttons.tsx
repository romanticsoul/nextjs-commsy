import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Link } from "@shared/ui/link"

export function AuthButtons() {
	return (
		<div className="col-span-2 flex justify-end gap-2">
			<Button asChild size="lg">
				<Link href={ROUTES.AUTH}>Login</Link>
			</Button>
		</div>
	)
}
