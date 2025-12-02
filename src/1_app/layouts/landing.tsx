import type { Metadata } from "next"
import type { LayoutProps } from "./type"
import { LandingHeader } from "@widgets/header"

export const metadata: Metadata = {
	title: "Commsy - Landing",
	description: "The saas comment service",
}

export function LandingLayout({ children }: LayoutProps) {
	return (
		<>
			<LandingHeader />
			{children}
		</>
	)
}
