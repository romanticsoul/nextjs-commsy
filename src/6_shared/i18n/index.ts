import { hasLocale } from "next-intl"
import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"
import { getRequestConfig } from "next-intl/server"

import Messages from "./messages/ru.json"

export const routing = defineRouting({
	defaultLocale: "ru",
	localePrefix: "as-needed",
	locales: ["ru", "en"],
})

export const { getPathname, Link, redirect, usePathname, useRouter } =
	createNavigation(routing)

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale
	const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

	return {
		locale,
		 
		messages: (await import(`./messages/${locale}.json`)).default,
	}
})

declare module "next-intl" {
	interface AppConfig {
		Locale: (typeof routing.locales)[number]
		Messages: typeof Messages
		// Formats: typeof formats
	}
}
