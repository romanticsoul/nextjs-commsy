import { DashboardHeader } from "@widgets/header"

import type { LayoutProps } from "./type"

export function DashboardLayout({ children }: LayoutProps) {
	return (
		<>
			<DashboardHeader />
			<main>{children}</main>
		</>
	)
}
