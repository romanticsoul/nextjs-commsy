import { Button } from "@shared/ui/button"
import { GitHubIcon, GoogleIcon } from "@shared/ui/icon"

import type { Metadata } from "next"

export const authMetadata: Metadata = {
	title: "Auth — recoms",
	description: "The saas comment service",
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
				<Button variant="default" size="lg">
					<GitHubIcon theme="dark" className="size-5 not-dark:hidden" />
					<GitHubIcon theme="light" className="size-5 dark:hidden" />
					Sign in with GitHub
				</Button>
				<Button variant="default" size="lg">
					<GoogleIcon className="size-5" />
					Sign in with Google
				</Button>
			</div>
		</div>
	)
}
