"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@shared/ui/card"
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@shared/ui/chart"
import { Bar, BarChart, XAxis } from "recharts"

export const description = "A stacked bar chart with a legend"
export const iframeHeight = "600px"
export const containerClassName =
	"[&>div]:w-full [&>div]:max-w-md flex items-center justify-center min-h-svh"

const chartData = [
	// { date: "2024-04-01", added: 218, blocked: 34 },
	// { date: "2024-04-02", added: 95, blocked: 13 },
	// { date: "2024-04-03", added: 172, blocked: 25 },
	// { date: "2024-04-04", added: 248, blocked: 40 },
	// { date: "2024-04-05", added: 365, blocked: 62 },
	// { date: "2024-04-06", added: 312, blocked: 52 },
	// { date: "2024-04-07", added: 240, blocked: 38 },
	// { date: "2024-04-08", added: 415, blocked: 70 },
	// { date: "2024-04-09", added: 62, blocked: 10 },
	// { date: "2024-04-10", added: 255, blocked: 40 },
	// { date: "2024-04-11", added: 330, blocked: 56 },
	// { date: "2024-04-12", added: 285, blocked: 46 },
	// { date: "2024-04-13", added: 350, blocked: 60 },
	// { date: "2024-04-14", added: 140, blocked: 22 },
	// { date: "2024-04-15", added: 118, blocked: 18 },
	// { date: "2024-04-16", added: 142, blocked: 24 },
	// { date: "2024-04-17", added: 440, blocked: 75 },
	// { date: "2024-04-18", added: 370, blocked: 62 },
	// { date: "2024-04-19", added: 238, blocked: 38 },
	// { date: "2024-04-20", added: 92, blocked: 14 },
	// { date: "2024-04-21", added: 135, blocked: 22 },
	// { date: "2024-04-22", added: 220, blocked: 35 },
	// { date: "2024-04-23", added: 142, blocked: 24 },
	// { date: "2024-04-24", added: 380, blocked: 65 },
	// { date: "2024-04-25", added: 210, blocked: 35 },
	// { date: "2024-04-26", added: 78, blocked: 12 },
	// { date: "2024-04-27", added: 390, blocked: 66 },
	// { date: "2024-04-28", added: 125, blocked: 20 },
	// { date: "2024-04-29", added: 310, blocked: 52 },
	// { date: "2024-04-30", added: 450, blocked: 76 },
	// { date: "2024-05-01", added: 168, blocked: 28 },
	// { date: "2024-05-02", added: 295, blocked: 50 },
	// { date: "2024-05-03", added: 245, blocked: 40 },
	// { date: "2024-05-04", added: 380, blocked: 64 },
	// { date: "2024-05-05", added: 485, blocked: 82 },
	// { date: "2024-05-06", added: 495, blocked: 84 },
	// { date: "2024-05-07", added: 385, blocked: 65 },
	// { date: "2024-05-08", added: 152, blocked: 25 },
	// { date: "2024-05-09", added: 225, blocked: 38 },
	// { date: "2024-05-10", added: 290, blocked: 49 },
	// { date: "2024-05-11", added: 330, blocked: 56 },
	// { date: "2024-05-12", added: 200, blocked: 32 },
	// { date: "2024-05-13", added: 195, blocked: 33 },
	// { date: "2024-05-14", added: 445, blocked: 75 },
	// { date: "2024-05-15", added: 470, blocked: 80 },
	// { date: "2024-05-16", added: 335, blocked: 57 },
	// { date: "2024-05-17", added: 495, blocked: 84 },
	// { date: "2024-05-18", added: 312, blocked: 53 },
	// { date: "2024-05-19", added: 232, blocked: 39 },
	// { date: "2024-05-20", added: 180, blocked: 30 },
	// { date: "2024-05-21", added: 85, blocked: 14 },
	// { date: "2024-05-22", added: 82, blocked: 13 },
	// { date: "2024-05-23", added: 255, blocked: 43 },
	// { date: "2024-05-24", added: 290, blocked: 49 },
	// { date: "2024-05-25", added: 205, blocked: 35 },
	// { date: "2024-05-26", added: 210, blocked: 35 },
	// { date: "2024-05-27", added: 415, blocked: 70 },
	// { date: "2024-05-28", added: 230, blocked: 39 },
	// { date: "2024-05-29", added: 80, blocked: 13 },
	// { date: "2024-05-30", added: 335, blocked: 57 },
	// { date: "2024-05-31", added: 180, blocked: 30 },
	// { date: "2024-06-01", added: 175, blocked: 29 },
	// { date: "2024-06-02", added: 465, blocked: 79 },
	// { date: "2024-06-03", added: 105, blocked: 17 },
	// { date: "2024-06-04", added: 435, blocked: 74 },
	// { date: "2024-06-05", added: 90, blocked: 15 },
	// { date: "2024-06-06", added: 290, blocked: 49 },
	// { date: "2024-06-07", added: 320, blocked: 54 },
	// { date: "2024-06-08", added: 380, blocked: 64 },
	// { date: "2024-06-09", added: 440, blocked: 75 },
	// { date: "2024-06-10", added: 152, blocked: 25 },
	// { date: "2024-06-11", added: 95, blocked: 15 },
	// { date: "2024-06-12", added: 490, blocked: 83 },
	// { date: "2024-06-13", added: 82, blocked: 13 },
	// { date: "2024-06-14", added: 430, blocked: 73 },
	// { date: "2024-06-15", added: 305, blocked: 52 },
	// { date: "2024-06-16", added: 370, blocked: 63 },
	{ date: "2024-06-17", added: 480, blocked: 81 },
	{ date: "2024-06-18", added: 110, blocked: 18 },
	{ date: "2024-06-19", added: 340, blocked: 58 },
	{ date: "2024-06-20", added: 410, blocked: 69 },
	{ date: "2024-06-21", added: 172, blocked: 29 },
	{ date: "2024-06-22", added: 315, blocked: 53 },
	{ date: "2024-06-23", added: 485, blocked: 82 },
	{ date: "2024-06-24", added: 135, blocked: 22 },
	{ date: "2024-06-25", added: 138, blocked: 23 },
	{ date: "2024-06-26", added: 430, blocked: 73 },
	{ date: "2024-06-27", added: 450, blocked: 76 },
	{ date: "2024-06-28", added: 152, blocked: 25 },
	{ date: "2024-06-29", added: 100, blocked: 17 },
	{ date: "2024-06-30", added: 440, blocked: 74 },
]

const chartConfig = {
	added: {
		color: "var(--chart-2)",
		label: "Добавлено",
	},
	blocked: {
		color: "var(--chart-5)",
		label: "Заблокировано",
	},
} satisfies ChartConfig

export function CommentsArea() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Tooltip - Default</CardTitle>
				<CardDescription>Default tooltip with ChartTooltipContent.</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer className="h-96 w-full" config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						{/* <ChartTooltipContent
							indicator="dot"
							labelFormatter={(value) => {
								return new Date(value).toLocaleDateString("ru-RU", {
									day: "numeric",
									month: "short",
								})
							}}
						/> */}
						<XAxis
							axisLine={false}
							dataKey="date"
							// tickFormatter={(value) => {
							// 	const date = new Date(value)
							// 	return date.toLocaleDateString("ru-RU", {
							// 		day: "numeric",
							// 		month: "short",
							// 	})
							// }}
							tickFormatter={(value) => {
								return new Date(value).toLocaleDateString("en-US", {
									weekday: "short",
								})
							}}
							tickLine={false}
							tickMargin={10}
						/>
						<Bar
							dataKey="blocked"
							fill="var(--color-blocked)"
							radius={[0, 0, 10, 10]}
							stackId="a"
						/>
						<Bar
							dataKey="added"
							fill="var(--color-added)"
							radius={[10, 10, 0, 0]}
							stackId="a"
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									indicator="dot"
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("ru-RU", {
											day: "numeric",
											month: "short",
										})
									}}
								/>
							}
							cursor={false}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
