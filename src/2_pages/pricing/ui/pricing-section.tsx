import { ROUTES } from "@shared/config/routes"
import { Badge } from "@shared/ui/badge"
import { Button } from "@shared/ui/button"
import { Icon } from "@shared/ui/icon"
import { Link } from "@shared/ui/link"
import { Separator } from "@shared/ui/separator"

const PLANS = [
	{
		badge: "Free",
		buttonHref: ROUTES.AUTH,
		buttonText: "Get Started",
		features: [
			"До 1,000 комментариев в месяц",
			"Неограниченное количество интеграций",
			"Доступ к документации и сообществу",
		],
		monthlyPrice: "$0",
		name: "Free",
	},
	{
		badge: "Pro",
		buttonHref: ROUTES.AUTH,
		buttonText: "Purchase",
		features: ["Неограниченное количество комментариев", "Приоритетная поддержка"],
		isPopular: true,
		monthlyPrice: "$20",
		name: "Pro",
	},
]

export function PricingSection() {
	return (
		<section className={`py-32`}>
			<div className="container">
				<div className="flex flex-col gap-6">
					<h1 className="text-h1">Pricing</h1>
					<p className="text-description">Check out our affordable pricing plans</p>
					<div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
						{PLANS.map((plan) => (
							<div
								className={`flex w-full flex-col rounded-lg border p-6 text-left ${
									plan.isPopular ? "bg-muted" : ""
								}`}
								key={plan.name}
							>
								<Badge className="mb-8 block w-fit uppercase">{plan.badge}</Badge>
								<span className="text-4xl font-medium">{plan.monthlyPrice}</span>
								<p
									className={`text-muted-foreground ${plan.monthlyPrice === "$0" ? "invisible" : ""}`}
								>
									Per month
								</p>
								<Separator className="my-6" />
								<div className="flex h-full flex-col justify-between gap-20">
									<ul className="text-muted-foreground space-y-4">
										{plan.features.map((feature, featureIndex) => (
											<li className="flex items-center gap-2" key={featureIndex}>
												<Icon name="IconCheck" />
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<Button asChild className="w-full">
										<Link href={plan.buttonHref}>{plan.buttonText}</Link>
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
