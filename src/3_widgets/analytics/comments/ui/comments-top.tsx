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

const invoices = [
	{
		invoice: "INV001",
		paymentMethod: "Credit Card",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
	},
	{
		invoice: "INV002",
		paymentMethod: "PayPal",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
	},
	{
		invoice: "INV003",
		paymentMethod: "Bank Transfer",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
	},
	{
		invoice: "INV004",
		paymentMethod: "Credit Card",
		paymentStatus: "Paid",
		totalAmount: "$450.00",
	},
	{
		invoice: "INV005",
		paymentMethod: "PayPal",
		paymentStatus: "Paid",
		totalAmount: "$550.00",
	},
	{
		invoice: "INV006",
		paymentMethod: "Bank Transfer",
		paymentStatus: "Pending",
		totalAmount: "$200.00",
	},
	{
		invoice: "INV007",
		paymentMethod: "Credit Card",
		paymentStatus: "Unpaid",
		totalAmount: "$300.00",
	},
]

export function CommentsTop() {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Pie Chart</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<TableDemo />
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

function TableDemo() {
	return (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.invoice}>
						<TableCell className="font-medium">{invoice.invoice}</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell className="text-right">{invoice.totalAmount}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	)
}
