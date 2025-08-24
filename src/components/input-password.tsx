import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react"
import { ComponentProps, useId, useMemo, useState } from "react"

type InputPassWordProps = ComponentProps<typeof Input> & {
    password: string
    type?: "password" | "confirmPassword"
}

export const InputPassWord = ({
    password, type = "password", ...props
}: InputPassWordProps) => {

    const id = useId()
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const toggleVisibility = () => setIsVisible((prevState) => !prevState)

    const checkStrength = (pass: string) => {

        const requirements = [
            {
                regex: /.{6,}/,
                text: "Password must be at least 6 characters long"
            },
            {
                regex: /[0-9]/,
                text: "Password must contain at least one number"
            },
            {
                regex: /[a-z]/,
                text: "Password must contain at least one lowercase letter"
            },
            {
                regex: /[A-Z]/,
                text: "Password must contain at least one uppercase letter"
            },
        ]

        return requirements.map((req) => ({
            met: req.regex.test(pass),
            text: req.text,
        }))
    }

    const strength = checkStrength(password)

    const strengthScore = useMemo(() => {
        return strength.filter((req) => req.met).length
    }, [strength])

    const getStrengthColor = (score: number) => {
        if (score === 0) return "bg-border"
        if (score <= 1) return "bg-destructive"
        if (score <= 2) return "bg-orange-500"
        if (score === 3) return "bg-amber-500"
        return "bg-primary"
    }

    const Icon = isVisible ? EyeOffIcon : EyeIcon

    if (type === "confirmPassword") {
        return (
            <div className="relative">
                <Input
                    id={id}
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

    return (
        <div>
            <div className="*:not-first:mt-2">
                <div className="relative">
                    <Input
                        id={id}
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
            </div>
            <div
                role="progressbar"
                className="bg-border mt-4 mb-4 h-1 w-full overflow-hidden rounded-full"
            >
                <div
                    className={cn(
                        "h-full transition-all duration-500 ease-out",
                        getStrengthColor(strengthScore)
                    )}
                    style={{ width: `${(strengthScore / 4) * 100}%` }}
                />
            </div>
            <ul className="space-y-1.5">
                {strength.map((req, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2"
                    >
                        {req.met
                            ? <CheckIcon className="text-emerald-500 size-4" />
                            : <XIcon className="text-muted-foreground/80 size-4" />
                        }
                        <span className={cn(
                            "text-sm", req.met ? "text-sucess" : "text-muted-foreground"
                        )}>
                            {req.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
