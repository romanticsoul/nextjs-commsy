// import { UserPreview } from "@features/user-preview"
import { PRIVATE_ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Icon } from "@shared/ui/icon"
import { Link } from "@shared/ui/link"
import { getTranslations } from "next-intl/server"

import { Header } from "./header"
import { Logo } from "./logo"

async function DashboardNavigationMenu() {
	const t = await getTranslations("HomePage")

	const MENU = [
		{
			text: t("title"),
			icon: <Icon name="ChartPie" />,
			href: PRIVATE_ROUTES.DASHBOARD,
			primary: true,
		},
		{
			text: "Comments",
			icon: <Icon name="MessageCircle" />,
			href: PRIVATE_ROUTES.DASHBOARD,
		},
		{
			text: "Settings",
			icon: <Icon name="Settings" />,
			href: PRIVATE_ROUTES.DASHBOARD,
		},
		{
			text: "Api docs",
			icon: <Icon name="CodeXml" />,
			href: PRIVATE_ROUTES.DASHBOARD,
		},
	]

	return (
		<div className="flex gap-2">
			{MENU.map(({ text, primary, icon, href }) => (
				<Button variant={primary ? "default" : "secondary"} key={text} size="lg" asChild>
					<Link href={href}>
						{icon}
						{text}
					</Link>
				</Button>
			))}
		</div>
	)
}

export function DashboardHeader() {
	return (
		<Header>
			<div className="flex items-center">
				<div className="mr-12">
					<Logo />
				</div>
				<DashboardNavigationMenu />
				<div className="flex justify-end gap-2">{/* <UserPreview /> */}</div>
			</div>
		</Header>
	)
}
