import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Link } from "@shared/ui/link"
import { getTranslations } from "next-intl/server"

import { Header } from "./header"
import { Logo } from "./logo"

export async function LandingHeader() {
	const t = await getTranslations("layout.landing-header")

	return (
		<Header>
			<div className="grid grid-cols-8 items-center">
				<Logo />
				<nav className="col-span-4">
					<ul className="flex justify-center gap-12">
						<li>
							<Link href={ROUTES.HOME}>{t("home-link")}</Link>
						</li>
						<li>
							<Link href={ROUTES.HOME}>{t("about-link")}</Link>
						</li>
						<li>
							<Link href={ROUTES.PRICING}>{t("pricing-link")}</Link>
						</li>
						<li>
							<Link href={ROUTES.DOCUMENTATION}>{t("documentation-link")}</Link>
						</li>
					</ul>
				</nav>
				<div className="col-span-2 flex justify-end gap-2">
					<Button asChild size="lg">
						<Link href={ROUTES.AUTH}>{t("auth-button")}</Link>
					</Button>
				</div>
			</div>
		</Header>
	)
}
