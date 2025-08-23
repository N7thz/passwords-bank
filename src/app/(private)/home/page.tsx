"use client"

import { findPasswords } from "@/actions/find-passwords"
import { InputPassWord } from "@/components/input-password"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"

export function AlertDialogDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className="w-full">
					Register a password
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="border-primary">
				<AlertDialogHeader>
					<AlertDialogTitle>
						Register a password
					</AlertDialogTitle>
				</AlertDialogHeader>
				<form
					id="password-form"
					className="space-y-4"
					onSubmit={(e) => {
						e.preventDefault()
						alert("Form submitted")
					}}
				>
					<InputPassWord placeholder="Enter your password" />
					<InputPassWord placeholder="Confirm your password" />
					<Input placeholder="Enter the site" />
					<Input placeholder="Enter your account" />
				</form>
				<Separator />
				<AlertDialogFooter>
					<AlertDialogCancel className="w-1/2">
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						type="submit"
						form="password-form"
						className="w-1/2"
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default function Home() {

	const {
		data: passwords,
		isLoading,
		status,
		refetch
	} = useQuery({
		queryKey: ['find-passwords'],
		queryFn: async () => findPasswords(),
	})

	if (status === "error") {
		return (
			<div className="flex-1 flex justify-center items-center">
				<Card className={cn(
					"w-1/3 border-primary",
					"max-md:w-2/3",
					"max-sm:w-11/12"
				)}>
					<CardHeader>
						<CardTitle className="text-lg">
							An error occurred while fetching passwords.
						</CardTitle>
					</CardHeader>
					<CardFooter>
						<Button
							className="w-full"
							onClick={() => refetch()}
						>
							Retry
						</Button>
					</CardFooter>
				</Card>
			</div>
		)
	}

	if (isLoading || !passwords) {
		return (
			<div className="flex-1 flex justify-center items-center">
				<Card className={cn(
					"w-1/3 border-primary",
					"max-md:w-2/3",
					"max-sm:w-11/12"
				)}>
					<CardHeader>
						<CardTitle className="text-2lg">
							<Skeleton />
						</CardTitle>
					</CardHeader>
					<CardContent className="size-full">
						<Skeleton className="h-32" />
					</CardContent>
				</Card>
			</div>
		)
	}

	return (
		<div className="flex-1 flex justify-center items-center">
			<Card className={cn(
				"w-1/3 border-primary",
				"max-md:w-2/3",
				"max-sm:w-11/12"
			)}>
				<CardHeader>
					<CardTitle className="text-2lg">
						Welcome back!
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					{
						passwords.length > 0 ? (
							<p className="text-base text-muted-foreground">
								You have
								<span className="font-medium text-foreground">
									{passwords.length}
								</span>
								password{passwords.length > 1 ? 's' : ''} saved.
							</p>
						)
							: (
								<>
									<p className="text-base text-muted-foreground">
										No passwords found.
									</p>
									<AlertDialogDemo />
								</>
							)
					}
				</CardContent>
			</Card>
		</div >
	)
}
