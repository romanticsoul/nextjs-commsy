import { DashboardHeader } from "@widgets/header"

import type { LayoutProps } from "./type"

export function DashboardLayout({ children }: LayoutProps) {
	return (
		<>
			<DashboardHeader />
			<main className="container py-8">{children}</main>
		</>
	)
}
