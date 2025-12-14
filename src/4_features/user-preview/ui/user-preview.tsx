import { PRIVATE_ROUTES } from "@shared/config/routes"
import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar"
import { Badge } from "@shared/ui/badge"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@shared/ui/dropdown-menu"
import { Icon } from "@shared/ui/icon"
import Link from "next/link"

export function UserPreview() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UserButton />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" side="bottom">
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon className="size-4.5" name="User" />
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon className="size-4.5" name="CreditCard" />
						Subscription
						<Badge className="ml-6">Pro</Badge>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon className="size-4.5" name="Info" />
						Help center
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon className="size-4.5" name="LogOut" />
						Sign out
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

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
					<AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
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
