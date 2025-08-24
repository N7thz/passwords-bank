"use server"

import { prisma } from "@/lib/prisma"
import { RegisterPasswordSchema } from "@/schemas/register-password-schema"

type RegisterPasswordProps = Omit<RegisterPasswordSchema, "confirmPassword">

export async function registerPassword({
    account, password, site
}: RegisterPasswordProps) {
    return await prisma.password.create({
        data: {
            account,
            password,
            site
        }
    })
}