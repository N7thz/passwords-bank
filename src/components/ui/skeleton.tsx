import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="skeleton"
			className={cn("h-8 w-full bg-border animate-pulse animate-infinite animate-ease-in-out rounded-md", className)}
			{...props}
		/>
	)
}

export { Skeleton }
