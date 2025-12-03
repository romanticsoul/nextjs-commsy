import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import Link from "next/link"

export function AuthButtons() {
	return (
		<div className="flex gap-2">
			<Button asChild variant="outline" size="lg">
				<Link href={ROUTES.LOGIN}>Login</Link>
			</Button>
			<Button asChild size="lg">
				<Link href={ROUTES.SIGNUP}>Sign up</Link>
			</Button>
		</div>
	)
}
