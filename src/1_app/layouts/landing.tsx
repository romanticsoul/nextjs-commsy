import { LandingHeader } from "@widgets/header"

import type { LayoutProps } from "./type"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Commsy - Landing",
	description: "The saas comment service",
}

export function LandingLayout({ children }: LayoutProps) {
	return (
		<>
			<LandingHeader />
			<main>{children}</main>
		</>
	)
}
