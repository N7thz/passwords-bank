import { z } from "zod";

export const signSchema = z.object({
	email: z.email("Email invalid"),
	password: z.string().min(6, "password must be at least 6 characters long"),
});

export type FormSignData = z.infer<typeof signSchema>;
