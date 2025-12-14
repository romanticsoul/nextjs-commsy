// import { UserPreview } from "@features/user-preview"
import { PRIVATE_ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import { Icon } from "@shared/ui/icon"
import { Link } from "@shared/ui/link"
import { getTranslations } from "next-intl/server"

import { Header } from "./header"
import { Logo } from "./logo"

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

async function DashboardNavigationMenu() {
	const t = await getTranslations("HomePage")

	const MENU = [
		{
			href: PRIVATE_ROUTES.DASHBOARD,
			icon: <Icon name="IconChartPie" />,
			primary: true,
			text: t("title"),
		},
		{
			href: PRIVATE_ROUTES.DASHBOARD,
			icon: <Icon name="IconMessageCircle" />,
			text: "Comments",
		},
		{
			href: PRIVATE_ROUTES.DASHBOARD,
			icon: <Icon name="IconSettings" />,
			text: "Settings",
		},
		{
			href: PRIVATE_ROUTES.DASHBOARD,
			icon: <Icon name="IconCode" />,
			text: "Api docs",
		},
	]

	return (
		<div className="flex gap-2">
			{MENU.map(({ href, icon, primary, text }) => (
				<Button key={text} size="lg" variant={primary ? "default" : "secondary"}>
					<Link href={href}>
						{icon}
						{text}
					</Link>
				</Button>
			))}
		</div>
	)
}
