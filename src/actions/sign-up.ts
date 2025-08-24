"use server";

import { prisma } from "@/lib/prisma";
import { FormSignData } from "@/schemas/login-schema";
import { hash } from "bcryptjs";

export async function signUp(formData: FormSignData) {
	const { email } = formData;

	const userAlreadyExists = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (userAlreadyExists) throw new Error("User already exists");

	const password = await hash(formData.password, 6);

	const user = await prisma.user.create({
		data: {
			email,
			password,
		},
	});

	return { user };
}
