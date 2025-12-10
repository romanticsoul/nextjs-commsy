import { LandingHeader } from "@widgets/header"

import type { LayoutProps } from "./type"

export function LandingLayout({ children }: LayoutProps) {
	return (
		<>
			<LandingHeader />
			<main>{children}</main>
		</>
	)
}
