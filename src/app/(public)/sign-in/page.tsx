import { FormSign } from "@/components/forms/form-sign"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default async function SignInPage() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Card className={cn(
        "w-1/3 border-primary",
        "max-md:w-2/3",
        "max-sm:w-11/12"
      )}>
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormSign />
        </CardContent>
      </Card>
    </div>
  )
}
