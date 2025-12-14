import type { Metadata } from "next"

import { routing } from "@shared/i18n"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

import type { LayoutProps } from "./type"

import { fontMono, fontSans } from "../styles/fonts"
import "../styles/globals.css"

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
		<html lang={locale}>
			<body
				className={`bg-background text-foreground ${fontSans.variable} ${fontMono.className} antialiased`}
			>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
