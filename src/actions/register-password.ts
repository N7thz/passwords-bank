"use server"

import { prisma } from "@/lib/prisma"
import { RegisterPasswordProps } from "@/schemas/register-password-schema"

type RegisterPasswordProps = Omit<RegisterPasswordProps, "confirmPassword">

export async function registerPassword({
	account,
	password,
	site,
}: RegisterPasswordProps) {
	return await prisma.password.create({
		data: {
			account,
			password,
			site,
		},
	})
}
