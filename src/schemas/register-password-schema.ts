import z from "zod";

export const registerPasswordSchema = z
	.object({
		site: z.string().min(2).max(50),
		account: z.string().min(2).max(50),
		password: z
			.string()
			.min(6, { message: "Password must be at least 6 characters long" })
			.max(32, { message: "Password must be at most 32 characters long" })
			.regex(/[A-Z]/, {
				message: "Password must contain at least one uppercase letter",
			})
			.regex(/[a-z]/, {
				message: "Password must contain at least one lowercase letter",
			})
			.regex(/[0-9]/, { message: "Password must contain at least one number" })
			.regex(/[^A-Za-z0-9]/, {
				message: "Password must contain at least one special character",
			})
			.refine((value) => !/\s/.test(value), {
				message: "Password cannot contain whitespace",
			}),
		confirmPassword: z.string().min(8).max(50),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

export type RegisterPasswordSchema = z.infer<typeof registerPasswordSchema>;
