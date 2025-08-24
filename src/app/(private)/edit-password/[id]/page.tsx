import { findPasswordById } from "@/actions/find-password-by-id"
import { FormEditPassword } from "@/components/forms/form-edit-password"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default async function EditPassword({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params

    return (
        <div className="flex-1 flex justify-center items-center">
            <Card className={cn(
                "w-1/3 border-primary",
                "max-md:w-2/3",
                "max-sm:w-11/12"
            )}>
                <CardHeader>
                    <CardTitle className="text-2xl">
                        {id}
                    </CardTitle>
                </CardHeader>
                    <FormEditPassword id={id} />
            </Card>
        </div>
    )
}