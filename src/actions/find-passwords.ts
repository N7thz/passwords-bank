"use server";

import { prisma } from "@/lib/prisma";

export async function findPasswords() {
	return await prisma.password.findMany();
}
