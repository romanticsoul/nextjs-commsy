import { ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Link } from "@shared/ui/link"

export function HeroSection() {
	return (
		<section className="py-32">
			<div className="container text-center">
				<div className="mx-auto flex max-w-5xl flex-col gap-6">
					<h1 className="text-h1">Comments for your site with automatic moderation</h1>
					<p className="text-description">
						Comments without an imposed user interface. You create the form, and we take
						care of their storage, moderation, and spam protection.
					</p>
				</div>
				<div className="flex justify-center gap-4">
					<Button asChild className="mt-10" size="lg">
						<Link href={ROUTES.AUTH}>Get started</Link>
					</Button>
					<Button className="mt-10" size="lg" variant="outline">
						<Link href={ROUTES.DOCUMENTATION}>Read the docs</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
