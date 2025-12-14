import type { Metadata } from "next"

import { Button } from "@shared/ui/button"
import { GitHubIcon, GoogleIcon } from "@shared/ui/icon"

export const authMetadata: Metadata = {
	description: "The saas comment service",
	title: "Auth — recoms",
}

export function AuthPage() {
	return (
		<div className="mx-auto max-w-lg py-32">
			<div className="mb-8 text-center">
				<h1 className="mb-2 text-2xl font-bold">Welcome to recoms</h1>
				<p className="text-description text-sm font-medium">
					Use a service that is convenient for you to log in
				</p>
			</div>
			<div className="grid gap-2">
				<Button size="lg" variant="default">
					<GitHubIcon className="size-5 not-dark:hidden" theme="dark" />
					<GitHubIcon className="size-5 dark:hidden" theme="light" />
					Sign in with GitHub
				</Button>
				<Button size="lg" variant="default">
					<GoogleIcon className="size-5" />
					Sign in with Google
				</Button>
			</div>
		</div>
	)
}
