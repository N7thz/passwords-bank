import { Button } from "@/components/ui/button"
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export const CardLoading = () => {
    return (
        <div className="flex-1 flex justify-center items-center">
            <Card className={cn(
                "w-1/3 border-primary",
                "max-md:w-2/3",
                "max-sm:w-11/12"
            )}>
                <CardHeader>
                    <CardTitle className="text-2lg">
                        <Skeleton />
                    </CardTitle>
                </CardHeader>
                <CardFooter>
                    <Button
                        disabled
                        className="w-full"
                    >
                        Register a password
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}