import { icons, type LucideProps } from "lucide-react"

type IconName = keyof typeof icons

export const Icon = ({ name, ...props }: { name: IconName } & LucideProps) => {
	const LucideIcon = icons[name]
	return <LucideIcon className="size-5" strokeWidth={2} {...props} />
}
