import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const CardError = ({ refetch }: { refetch: () => void }) => {
	return (
		<div className="flex-1 flex justify-center items-center">
			<Card
				className={cn("w-1/3 border-primary", "max-md:w-2/3", "max-sm:w-11/12")}
			>
				<CardHeader>
					<CardTitle className="text-lg">
						An error occurred while fetching passwords.
					</CardTitle>
				</CardHeader>
				<CardFooter>
					<Button className="w-full" onClick={() => refetch()}>
						Retry
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
