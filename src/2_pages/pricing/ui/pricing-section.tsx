import { ROUTES } from "@shared/config/routes"
import { Badge } from "@shared/ui/badge"
import { Button } from "@shared/ui/button"
import { Icon } from "@shared/ui/icon"
import { Link } from "@shared/ui/link"
import { Separator } from "@shared/ui/separator"

const PLANS = [
	{
		name: "Free",
		badge: "Free",
		monthlyPrice: "$0",
		features: [
			"До 1,000 комментариев в месяц",
			"Неограниченное количество интеграций",
			"Доступ к документации и сообществу",
		],
		buttonText: "Get Started",
		buttonHref: ROUTES.SIGNUP,
	},
	{
		name: "Pro",
		badge: "Pro",
		monthlyPrice: "$20",
		features: ["Неограниченное количество комментариев", "Приоритетная поддержка"],
		buttonText: "Purchase",
		buttonHref: ROUTES.SIGNUP,
		isPopular: true,
	},
]

export function PricingSection() {
	return (
		<section className={`py-32`}>
			<div className="container">
				<div className="flex flex-col gap-6">
					<h1 className="text-3xl font-black text-pretty lg:text-6xl">Pricing</h1>
					<p className="text-muted-foreground max-w-3xl lg:text-xl">
						Check out our affordable pricing plans
					</p>
					<div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
						{PLANS.map((plan) => (
							<div
								key={plan.name}
								className={`flex w-full flex-col rounded-lg border p-6 text-left ${
									plan.isPopular ? "bg-muted" : ""
								}`}
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
											<li key={featureIndex} className="flex items-center gap-2">
												<Icon name="Check" />
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
