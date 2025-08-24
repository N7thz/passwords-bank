"use server"

import { prisma } from "@/lib/prisma"

export async function deletePassword(id: string) {

    const oldPassword = await prisma.password.findUnique({
        where: {
            id
        }
    })

    if (!oldPassword) {
        throw new Error("Password not found")
    }

    await prisma.password.delete({
        where: {
            id
        }
    })
}