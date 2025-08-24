"use server"

import { prisma } from "@/lib/prisma"

export async function findPasswordById(id: string) {
	return await prisma.password.findUnique({
		where: {
			id: id
		}
	})
}