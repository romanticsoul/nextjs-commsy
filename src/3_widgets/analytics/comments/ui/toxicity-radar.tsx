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
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

export const description = "A radar chart"

const chartData = [
	{ value: 186, month: "TOXICITY" },
	{ value: 305, month: "SEVERE_TOXICITY" },
	{ value: 237, month: "IDENTITY_ATTACK" },
	{ value: 273, month: "INSULT" },
	{ value: 209, month: "PROFANITY" },
	{ value: 214, month: "THREAT" },
]

const chartConfig = {
	value: {
		color: "var(--chart-1)",
		label: "Comments",
	},
} satisfies ChartConfig

export function ToxicityRadar() {
	return (
		<Card>
			<CardHeader className="items-center pb-4">
				<CardTitle>Toxicity profile</CardTitle>
				<CardDescription>
					Distribution of blocked comments by category (based on automatic moderation
					signals)
				</CardDescription>
			</CardHeader>
			<CardContent className="pb-0">
				<ChartContainer className="h-96 w-full" config={chartConfig}>
					<RadarChart data={chartData}>
						<ChartTooltip content={<ChartTooltipContent />} cursor={false} />
						<PolarAngleAxis dataKey="month" />
						<PolarGrid />
						<Radar dataKey="value" fill="var(--color-value)" fillOpacity={0.6} />
					</RadarChart>
				</ChartContainer>
			</CardContent>
			{/* <CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 leading-none font-medium">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground flex items-center gap-2 leading-none">
					January - June 2024
				</div>
			</CardFooter> */}
		</Card>
	)
}
