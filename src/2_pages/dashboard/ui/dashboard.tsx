import {
	CommentsArea,
	CommentsOverview,
	CommentsPie,
	CommentsTop,
} from "@widgets/analytics/comments"

export function DashboardPage() {
	return (
		<div>
			<div className="grid gap-4">
				<CommentsOverview />
				<CommentsArea />
				<div className="grid grid-cols-2 gap-4">
					<CommentsTop />
					<CommentsPie />
				</div>
			</div>
		</div>
	)
}
