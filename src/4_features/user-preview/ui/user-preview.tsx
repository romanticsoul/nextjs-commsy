import { PRIVATE_ROUTES } from "@shared/config/routes"
import { Avatar, AvatarImage, AvatarFallback } from "@shared/ui/avatar"
import { Badge } from "@shared/ui/badge"
import { Button } from "@shared/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@shared/ui/dropdown-menu"
import { Icon } from "@shared/ui/icon"
import { Separator } from "@shared/ui/separator"
import Link from "next/link"

function UserButton() {
	return (
		// <Button size="lg" className="h-12 gap-2 px-2" variant="ghost">
		<div className="flex">
			<div className="flex items-center gap-2">
				<div className="flex flex-col text-end">
					<p className="text-sm font-semibold">theromanticsoul</p>
					<span className="text-muted-foreground text-xs font-medium">
						yarulinainur@gmail.com
					</span>
				</div>
				<Avatar className="size-9 rounded-sm">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
			{/* <Separator orientation="vertical" className="mx-2" />
			<Button variant="outline">
				Logout
				<Icon name="LogOut" />
			</Button> */}
		</div>
		// </Button>
	)
}

export function UserPreview() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UserButton />
			</DropdownMenuTrigger>
			<DropdownMenuContent side="bottom" align="end">
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon name="User" className="size-4.5" />
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon name="CreditCard" className="size-4.5" />
						Subscription
						<Badge className="ml-6">Pro</Badge>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon name="Info" className="size-4.5" />
						Help center
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon name="LogOut" className="size-4.5" />
						Sign out
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
