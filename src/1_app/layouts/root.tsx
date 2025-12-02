import { fontSans, fontMono } from "../styles/fonts"

import type { LayoutProps } from "./type"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
	title: "Commsy",
	description: "The saas comment service",
}

export function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="ru">
			<body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
