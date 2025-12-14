import { Link as I18nLink } from "@shared/i18n"
import { cn } from "@shared/lib/utils"

export function Link({ className, ...props }: React.ComponentProps<typeof I18nLink>) {
	return (
		<I18nLink
			className={cn(
				"focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap ring-offset-2 transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	)
}
