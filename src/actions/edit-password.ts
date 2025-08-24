"use server"

import { prisma } from "@/lib/prisma"
import { Password } from "@prisma/client"

export async function editPassword(
    id: string,
    password: Omit<Password, "id" | "createdAt" | "updatedAt">
) {

    const oldPassword = await prisma.password.findUnique({
        where: {
            id
        }
    })

    if (!oldPassword) {
        throw new Error("Password not found")
    }

    return await prisma.password.update({
        where: {
            id
        },
        data: password
    })
}