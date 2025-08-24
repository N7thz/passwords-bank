import { FormRegisterPassword } from "@/components/forms/form-register-password";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardFooter,
	CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Password bank | Register password",
};

export default function RegisterPassword() {
	return (
		<div className="flex-1 flex justify-center items-center">
			<Card
				className={cn("w-1/3 border-primary", "max-md:w-2/3", "max-sm:w-11/12")}
			>
				<CardHeader>
					<CardTitle className="text-2lg">Register a password</CardTitle>
				</CardHeader>
				<CardContent>
					<FormRegisterPassword />
					<Separator />
				</CardContent>
				<CardFooter>
					<Button type="submit" form="password-form" className="w-full">
						Confirm
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
