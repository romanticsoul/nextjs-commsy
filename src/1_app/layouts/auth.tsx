import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Icon } from "@shared/ui/icon"
import { Link } from "@shared/ui/link"
import { Header } from "@widgets/header"

import type { LayoutProps } from "./type"

export function AuthLayout({ children }: LayoutProps) {
	return (
		<>
			<div className="flex min-h-dvh flex-col">
				<Header>
					<Button asChild variant="outline" size="lg">
						<Link href={ROUTES.HOME}>
							<Icon name="ChevronLeft" />
							Back to home
						</Link>
					</Button>
				</Header>
				<main className="container flex flex-1">{children}</main>
				<footer className="py-5">
					<div className="container">
						<div className="flex items-center justify-center gap-6">
							<Link href={ROUTES.TERMS_OF_SERVICE}>Terms of service</Link>
							<span>/</span>
							<Link href={ROUTES.PRIVACY_POLICE}>Privacy of police</Link>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}
