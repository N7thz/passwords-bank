"use server";

import { encrypt } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { FormSignData } from "@/schemas/login-schema";
import { compare } from "bcryptjs";
import { cookies as useCookies } from "next/headers";

export async function signIn({ email, password }: FormSignData) {
	const cookies = await useCookies();

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) throw new Error("Invalid password or email");

	const passwordIsValid = await compare(password, user.password);

	if (!passwordIsValid) throw new Error("Invalid password or email");

	const id = user.id;

	const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
	const token = await encrypt({
		sub: {
			id,
			email,
		},
		expires,
	});

	cookies.set("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		expires,
		sameSite: "lax",
		path: "/",
	});

	return { token };
}
