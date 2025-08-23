import { FormSign } from "@/components/forms/form-sign"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import { cn } from "@/lib/utils"
import { redirect, RedirectType } from "next/navigation"

export default async function SignUpPage() {

  async function getUser() {

    const user = await prisma.user.findFirst()

    if (user === null) return undefined

    return user
  }

  const user = await getUser()

  // if (user) redirect("/sign-in", RedirectType.replace)

  return (
    <div className="flex-1 flex justify-center items-center">
      <Card className={cn(
        "w-1/3 border-primary",
        "max-md:w-2/3",
        "max-sm:w-11/12"
      )}>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormSign />
        </CardContent>
      </Card>
    </div>
  )
}
