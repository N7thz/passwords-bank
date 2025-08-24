import { UseFormSetValue } from "react-hook-form"
import { generateAdvancedPassword } from "./generate-strong-password"
import { RegisterPasswordProps } from "@/schemas/register-password-schema"

export function generatePassword(
    setValue: UseFormSetValue<RegisterPasswordProps>
) {

    const password = generateAdvancedPassword()

    setValue("password", password)
    setValue("confirmPassword", password)
}