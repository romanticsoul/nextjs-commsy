import {
	CommentsArea,
	CommentsOverview,
	CommentsTop,
	ToxicityRadar,
} from "@widgets/analytics/comments"

export function DashboardPage() {
	return (
		<div>
			<div className="grid gap-4">
				<CommentsOverview />
				<CommentsArea />
				<div className="grid grid-cols-2 gap-4">
					<CommentsTop />
					<ToxicityRadar />
				</div>
			</div>
		</div>
	)
}
