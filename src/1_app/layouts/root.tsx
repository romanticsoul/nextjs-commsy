import type { Metadata } from "next"

import { Providers } from "@app/providers"
import { routing } from "@shared/i18n"
import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

import "../styles/globals.css"
import type { LayoutProps } from "./type"

import { fontMono, fontSans } from "../styles/fonts"

export const metadata: Metadata = {
	description: "The saas comment service",
	title: "recoms",
}

export async function RootLayout({ children, params }: LayoutProps) {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	setRequestLocale(locale)

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`bg-background text-foreground ${fontSans.variable} ${fontMono.className} antialiased`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
