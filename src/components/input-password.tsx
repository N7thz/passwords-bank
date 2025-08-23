import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { ComponentProps, useState } from "react"

export const InputPassWord = (props: ComponentProps<typeof Input>) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const toggleVisibility = () => setIsVisible((prevState) => !prevState)

    const Icon = isVisible ? EyeOffIcon : EyeIcon

    return (
        <div className="relative">
            <Input
                className="pe-9"
                placeholder="Digite sua senha"
                type={isVisible ? "text" : "password"}
                {...props}
            />
            <button
                type="button"
                className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                onClick={toggleVisibility}
            >
                <Icon className="size-4" />
            </button>
        </div>
    )
}
