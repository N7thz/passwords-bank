import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Ellipsis, RotateCcwKey, Trash } from "lucide-react"
import { redirect } from "next/navigation"

export const CardPasswordAction = ({ id }: { id: string }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-46">
                <DropdownMenuItem>
                    <Trash className="size-5 text-primary" />
                    <span>
                        Excluir
                    </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => redirect(`/edit-password/${id}`)}
                >
                    <RotateCcwKey className="size-5 text-primary" />
                    <span>
                        Editar
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
