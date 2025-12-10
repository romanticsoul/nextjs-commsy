import {
	Select,
	SelectContent,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@shared/ui/select"

export function SelectProject() {
	return (
		<>
			<Select defaultValue="apple">
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Personal project</SelectItem>

					{/* <Link href={"/"}> */}
					<SelectItem value="banana">Toran Inc.</SelectItem>
					<SelectSeparator />
					<SelectItem value="create">+ Create new project</SelectItem>
					{/* </Link> */}
				</SelectContent>
			</Select>
		</>
	)
}
