import {
	Card,
	CardContent,
	// CardDescription,
	CardHeader,
	CardTitle,
} from "@shared/ui/card"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@shared/ui/select"

export function CommentsOverview() {
	return (
		<div>
			<div className="mb-4 flex items-end justify-between">
				<h1 className="text-h1">overview</h1>
				<Select>
					<SelectTrigger
						aria-label="Select a value"
						className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
					>
						<SelectValue placeholder="Last 3 months" />
					</SelectTrigger>
					<SelectContent className="rounded-xl">
						<SelectItem className="rounded-lg" value="90d">
							Last 3 months
						</SelectItem>
						<SelectItem className="rounded-lg" value="30d">
							Last 30 days
						</SelectItem>
						<SelectItem className="rounded-lg" value="7d">
							Last 7 days
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<Card className="flex flex-col">
					<CardHeader className="items-center">
						<CardTitle>Добавлено</CardTitle>
						{/* <CardDescription>Новые комментарии за сегодня</CardDescription> */}
					</CardHeader>
					<CardContent className="flex-1">
						<span className="text-h1">27148</span>
					</CardContent>
				</Card>
				<Card className="flex flex-col">
					<CardHeader className="items-center">
						<CardTitle>Заблокировано</CardTitle>
						{/* <CardDescription>за сегодня</CardDescription> */}
					</CardHeader>
					<CardContent className="flex-1">
						<span className="text-h1">4609</span>
					</CardContent>
				</Card>
				<Card className="flex flex-col">
					<CardHeader className="items-center">
						<CardTitle>Заблокировано</CardTitle>
						{/* <CardDescription>за сегодня</CardDescription> */}
					</CardHeader>
					<CardContent className="flex-1">
						<span className="text-h1">17%</span>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
