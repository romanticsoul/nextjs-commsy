import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Link } from "@shared/ui/link"
import { getTranslations } from "next-intl/server"

export async function HeroSection() {
	const t = await getTranslations("landing.home")

	return (
		<section className="py-32">
			<div className="container text-center">
				<div className="mx-auto flex max-w-5xl flex-col gap-6">
					<h1 className="text-h1">{t("hero-title")}</h1>
					<p className="text-description">{t("hero-description")}</p>
				</div>
				<div className="flex justify-center gap-4">
					<Button asChild className="mt-10" size="lg">
						<Link href={ROUTES.AUTH}>{t("hero-action-button")}</Link>
					</Button>
					<Button className="mt-10" size="lg" variant="outline">
						<Link href={ROUTES.DOCUMENTATION}>{t("hero-documentation-button")}</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
