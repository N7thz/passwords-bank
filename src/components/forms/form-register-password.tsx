"use client";

import { generateAdvancedPassword } from "@/actions/generate-strong-password";
import { registerPassword } from "@/actions/register-password";
import { InputPassWord } from "@/components/input-password";
import { SpanErrorMessage } from "@/components/span-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
	registerPasswordSchema,
	RegisterPasswordSchema,
} from "@/schemas/register-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/toast";
import { useRouter } from "next/navigation";
import { queryClient } from "@/components/theme-provider";

export const FormRegisterPassword = () => {
	const form = useForm<RegisterPasswordSchema>({
		mode: "onSubmit",
		reValidateMode: "onChange",
		resolver: zodResolver(registerPasswordSchema),
	});

	const {
		setValue,
		watch,
		register,
		handleSubmit,
		formState: { errors, dirtyFields },
	} = form;

	const { push } = useRouter();

	async function onSubmit({ account, password, site }: RegisterPasswordSchema) {
		await registerPassword({
			account,
			password,
			site,
		})
			.then(() => {
				queryClient.invalidateQueries({
					queryKey: ["find-passwords"],
				});
				toast({
					title: "Success",
					description: "Password registered successfully!",
					onAutoClose: () => push("/home"),
				});
			})
			.catch(() =>
				toast({
					title: "Error",
					description: "Failed to register password.",
					variant: "error",
				}),
			);
	}

	function generatePassword() {
		const password = generateAdvancedPassword();
		setValue("password", password);
		setValue("confirmPassword", password);
	}

	return (
		<Form {...form}>
			<form
				id="password-form"
				className="space-y-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="space-y-0.5">
					<InputPassWord
						password={watch("password")}
						placeholder="Enter your password"
						{...register("password")}
						className={cn(
							dirtyFields.password &&
								!errors.password && [
									"focus-visible:ring-primary",
									"not-focus-visible:border-primary",
								],
							errors.password && [
								"focus-visible:ring-destructive",
								"not-focus-visible:border-destructive",
							],
						)}
					/>
					<Button
						type="button"
						variant={"link"}
						className="p-0"
						onClick={generatePassword}
					>
						Gerar senha Forte
					</Button>
					{errors.password && (
						<SpanErrorMessage message={errors.password.message} />
					)}
				</div>
				<div className="space-y-0.5">
					<InputPassWord
						type="confirmPassword"
						password={watch("confirmPassword")}
						placeholder="Confirm your password"
						{...register("confirmPassword")}
						className={cn(
							dirtyFields.confirmPassword &&
								!errors.confirmPassword && [
									"focus-visible:ring-primary",
									"not-focus-visible:border-primary",
								],
							errors.confirmPassword && [
								"focus-visible:ring-destructive",
								"not-focus-visible:border-destructive",
							],
						)}
					/>
					{errors.confirmPassword && (
						<SpanErrorMessage message={errors.confirmPassword.message} />
					)}
				</div>
				<div className="space-y-0.5">
					<Input
						placeholder="Enter the site"
						{...register("site")}
						className={cn(
							dirtyFields.site &&
								!errors.site && [
									"focus-visible:ring-primary",
									"not-focus-visible:border-primary",
								],
							errors.site && [
								"focus-visible:ring-destructive",
								"not-focus-visible:border-destructive",
							],
						)}
					/>
					{errors.site && <SpanErrorMessage message={errors.site.message} />}
				</div>
				<div className="space-y-0.5">
					<Input
						placeholder="Enter your account"
						{...register("account")}
						className={cn(
							dirtyFields.account &&
								!errors.account && [
									"focus-visible:ring-primary",
									"not-focus-visible:border-primary",
								],
							errors.account && [
								"focus-visible:ring-destructive",
								"not-focus-visible:border-destructive",
							],
						)}
					/>
					{errors.account && (
						<SpanErrorMessage message={errors.account.message} />
					)}
				</div>
			</form>
		</Form>
	);
};
