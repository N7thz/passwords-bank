"use client"

import { findPasswords } from "@/actions/find-passwords"
import { CardPassword } from "@/components/card-password"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { CardError } from "./card-error"
import { CardLoading } from "./card-loading"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

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

	if (status === "error") return <CardError refetch={refetch} />

	if (isLoading || !passwords) return <CardLoading />

	return (
		<div className="flex-1 flex justify-center items-center">
			<Card className={cn(
				"w-10/12 border-primary",
				"max-md:w-2/3",
				"max-sm:w-11/12"
			)}>
				<CardHeader>
					<CardTitle className="text-2lg">
						Welcome back!
					</CardTitle>
				</CardHeader>
				{
					passwords.length > 0
						? (
							<ScrollArea className="h-[500px] bg-card">
								<ScrollBar />
								<CardContent className="space-y-4 grid grid-cols-3 gap-2 size-full">
									{
										passwords.map(({ id, ...password }) => <CardPassword
											key={id}
											password={password}
										/>)
									}
								</CardContent>
							</ScrollArea>
						)
						: (
							<p className="text-base text-muted-foreground">
								No passwords found.
							</p>
						)

				}
				<CardFooter className="flex-col items-end">
					<Button
						asChild
						className="w-full"
					>
						<Link href={"/register-password"}>
							Register a password
						</Link>
					</Button>
					{
						passwords.length > 0 && (
							<p className="text-base text-muted-foreground pt-4">
								You have
								<span className="mx-0.5 font-medium text-foreground">
									{passwords.length}
								</span>
								password{passwords.length > 1 ? 's' : ''} saved.
							</p>
						)
					}
				</CardFooter>
			</Card>
		</div >
	)
}