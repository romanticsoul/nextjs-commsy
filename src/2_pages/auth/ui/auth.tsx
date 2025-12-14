import type { Metadata } from "next"

import { Button } from "@shared/ui/button"
import { GitHubIcon, GoogleIcon } from "@shared/ui/icon"
import { getTranslations } from "next-intl/server"

export const authMetadata: Metadata = {
	description: "The saas comment service",
	title: "Auth — recoms",
}

export async function AuthPage() {
	const t = await getTranslations("layout.auth")

	return (
		<div className="mx-auto max-w-lg py-32">
			<div className="mb-8 text-center">
				<h1 className="mb-2 text-2xl font-bold">{t("title")}</h1>
				<p className="text-description text-sm font-medium">{t("description")}</p>
			</div>
			<div className="grid gap-2">
				<Button size="lg" variant="default">
					<GitHubIcon className="size-5 not-dark:hidden" theme="dark" />
					<GitHubIcon className="size-5 dark:hidden" theme="light" />
					{t("login-with-github")}
				</Button>
				<Button size="lg" variant="default">
					<GoogleIcon className="size-5" />
					{t("login-with-google")}
				</Button>
			</div>
		</div>
	)
}
