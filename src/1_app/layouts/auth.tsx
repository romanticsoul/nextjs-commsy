import { ROUTES } from "@shared/config/routes"
import { Link } from "@shared/i18n"
import { Button } from "@shared/ui/button"
import { Icon } from "@shared/ui/icon"
import { Header } from "@widgets/header"

import type { LayoutProps } from "./type"

export function AuthLayout({ children }: LayoutProps) {
	return (
		<>
			<div className="flex min-h-dvh flex-col">
				<Header>
					<Button asChild size="lg" variant="outline">
						<Link href={ROUTES.HOME}>
							<Icon name="IconChevronLeft" />
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
