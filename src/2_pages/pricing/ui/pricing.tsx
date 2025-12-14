import type { Metadata } from "next"

import { PricingSection } from "./pricing-section"

export const metadata: Metadata = {
	description: "The saas comment service",
	title: "Pricing",
}

export function PricingPage() {
	return (
		<>
			<PricingSection />
		</>
	)
}
