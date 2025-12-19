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
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@shared/ui/table"
import { TrendingUp } from "lucide-react"

export const description = "A simple pie chart"

const resources = [
	{
		resourceId: "INV006",
		blocked: 230,
		comments: 1043,
	},
	{
		resourceId: "INV004",
		blocked: 43,
		comments: 321,
	},
	{
		resourceId: "INV007",
		blocked: 10,
		comments: 302,
	},
	{
		resourceId: "INV001",
		blocked: 32,
		comments: 120,
	},
	{
		resourceId: "INV008",
		blocked: 28,
		comments: 102,
	},
	{
		resourceId: "INV002",
		blocked: 23,
		comments: 93,
	},
	{
		resourceId: "INV003",
		blocked: 22,
		comments: 90,
	},
	{
		resourceId: "INV005",
		blocked: 12,
		comments: 21,
	},
]

export function CommentsTop() {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Top commented resources</CardTitle>
				<CardDescription>Resources generating the highest comment volume</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<TableDemo />
			</CardContent>
			{/* <CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 leading-none font-medium">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground leading-none">
					Showing total visitors for the last 6 months
				</div>
			</CardFooter> */}
		</Card>
	)
}

function TableDemo() {
	return (
		<Table>
			{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
			<TableHeader>
				<TableRow>
					<TableHead>Resource ID</TableHead>
					<TableHead>Blocked</TableHead>
					<TableHead className="text-right">Comments</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{resources.map((recourse) => (
					<TableRow key={recourse.resourceId}>
						<TableCell className="font-medium">{recourse.resourceId}</TableCell>
						<TableCell>{recourse.blocked}</TableCell>
						<TableCell className="text-right">{recourse.comments}</TableCell>
					</TableRow>
				))}
			</TableBody>
			{/* <TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter> */}
		</Table>
	)
}
