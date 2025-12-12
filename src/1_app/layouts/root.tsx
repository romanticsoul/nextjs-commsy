import { routing } from "@shared/i18n"
import { notFound } from "next/navigation"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"

import { fontSans, fontMono } from "../styles/fonts"

import type { LayoutProps } from "./type"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
	title: "recoms",
	description: "The saas comment service",
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
