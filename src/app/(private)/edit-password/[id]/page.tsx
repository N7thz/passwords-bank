import { FormEditPassword } from "@/components/forms/form-edit-password"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Password bank | Edit password",
}

export default async function EditPassword({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params

    return (
        <div className="flex-1 flex justify-center items-center">
            <Card className={cn(
                "w-1/3 border-primary space-y-2",
                "max-md:w-2/3",
                "max-sm:w-11/12"
            )}>
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Edit password
                    </CardTitle>
                    <CardDescription>
                        Edit the password for the selected entry.
                    </CardDescription>
                </CardHeader>
                <FormEditPassword id={id} />
            </Card>
        </div>
    )
}