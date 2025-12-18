"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@shared/ui/card"
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@shared/ui/chart"
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

export const description = "A simple pie chart"

const chartData = [
	{ browser: "chrome", fill: "var(--color-chrome)", visitors: 275 },
	{ browser: "safari", fill: "var(--color-safari)", visitors: 200 },
]

const chartConfig = {
	chrome: {
		color: "var(--chart-1)",
		label: "Chrome",
	},
	safari: {
		color: "var(--chart-2)",
		label: "Safari",
	},
	visitors: {
		label: "Visitors",
	},
} satisfies ChartConfig

export function CommentsPie() {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Pie Chart</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer className="mx-auto aspect-square" config={chartConfig}>
					<PieChart>
						<ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
						<Pie data={chartData} dataKey="visitors" nameKey="browser" />
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 leading-none font-medium">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground leading-none">
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	)
}
