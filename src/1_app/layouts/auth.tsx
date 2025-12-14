import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Icon } from "@shared/ui/icon"
import { Link } from "@shared/ui/link"
import { Header } from "@widgets/header"
import { getTranslations } from "next-intl/server"

import type { LayoutProps } from "./type"

export async function AuthLayout({ children }: LayoutProps) {
	const t = await getTranslations("layout.auth")
	return (
		<>
			<div className="flex min-h-dvh flex-col">
				<Header>
					<Button asChild size="lg" variant="outline">
						<Link href={ROUTES.HOME}>
							<Icon name="IconChevronLeft" />
							{t("back-button")}
						</Link>
					</Button>
				</Header>
				<main className="container flex flex-1">{children}</main>
				<footer className="py-5">
					<div className="container">
						<div className="flex items-center justify-center gap-6">
							<Link href={ROUTES.TERMS_OF_SERVICE}>{t("terms-of-service")}</Link>
							<span>/</span>
							<Link href={ROUTES.PRIVACY_POLICE}>{t("privacy-of-police")}</Link>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}
