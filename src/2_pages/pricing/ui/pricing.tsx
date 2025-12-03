import { PricingSection } from "./pricing-section"

import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Pricing",
	description: "The saas comment service",
}

export function PricingPage() {
	return (
		<>
			<PricingSection />
		</>
	)
}
