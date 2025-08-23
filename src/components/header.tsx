import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toogle"

export function Header() {
	return (
		<header className="flex h-16 items-center justify-between gap-4 border-b px-4">
			<ModeToggle />
			<div className="flex items-center gap-x-4">
				<SignedOut>
					<SignInButton>
						<Button variant="ghost">Sign in</Button>
					</SignInButton>
					<SignUpButton>
						<Button>Sign up</Button>
					</SignUpButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</header>
	)
}
