"use server"

import { prisma } from "@/lib/prisma"
import { RegisterPasswordProps } from "@/schemas/register-password-schema"

export async function registerPassword({
	account,
	password,
	site,
}: Omit<RegisterPasswordProps, "confirmPassword">) {
	return await prisma.password.create({
		data: {
			account,
			password,
			site,
		}
	})
}
