import { deletePassword } from "@/actions/delete-password"
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
import { queryClient } from "./theme-provider"
import { toast } from "@/components/toast"

export const DropPasswordAction = ({ id }: { id: string }) => {

    function onClick() {
        deletePassword(id)
            .then(async () => await queryClient.invalidateQueries({ queryKey: ["find-passwords"] }))
            .catch(err => toast({
                title: "Erro ao excluir senha",
                description: err.message,
                variant: "error"
            }))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size={"icon"}
                    variant={"outline"}
                >
                    <Ellipsis />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="min-w-46"
            >
                <DropdownMenuItem onClick={onClick}>
                    <Trash className="size-5 text-primary" />
                    <span>
                        Excluir
                    </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => redirect(`/edit-password/${id}`)}>
                    <RotateCcwKey className="size-5 text-primary" />
                    <span>
                        Editar
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
