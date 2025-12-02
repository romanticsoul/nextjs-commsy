import type { Metadata } from "next"
import { fontSans, fontMono } from "../styles/fonts"
import "./globals.css"

export const metadata: Metadata = {
	title: "Commsy",
	description: "The saas comment service",
}

export function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
