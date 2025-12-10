import { PRIVATE_ROUTES } from "@shared/config/routes"
import { Button } from "@shared/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@shared/ui/dropdown-menu"
import { Icon } from "@shared/ui/icon"
import Link from "next/link"

export function UserPreview() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button></Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="bottom">
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon name="User" />
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon name="CreditCard" />
						Subscription
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon name="Circle" />
						Help center
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={PRIVATE_ROUTES.DASHBOARD}>
						<Icon name="LogOut" />
						Sign out
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
