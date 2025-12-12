import { hasLocale } from "next-intl"
import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"
import { getRequestConfig } from "next-intl/server"

// import ruMessages from "./messages/ru.json"

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ["ru", "en"],

	// Used when no locale matches
	defaultLocale: "ru",
	localePrefix: "as-needed",
})

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing)

export default getRequestConfig(async ({ requestLocale }) => {
	// Typically corresponds to the `[locale]` segment
	const requested = await requestLocale
	const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

	return {
		locale,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		messages: (await import(`./messages/${locale}.json`)).default,
	}
})

declare module "next-intl" {
	interface AppConfig {
		Locale: (typeof routing.locales)[number]
		// Messages: typeof ruMessages
		// Formats: typeof formats
	}
}
