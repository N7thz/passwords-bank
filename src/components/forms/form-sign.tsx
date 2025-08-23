"use client"

import { signIn } from "@/actions/sign-in"
import { signUp } from "@/actions/sign-up"
import { toast } from "@/components/toast"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { signSchema, type FormSignData } from "@/schemas/login-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Info } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { use, useState } from "react"
import { useForm } from "react-hook-form"

export const FormSign = () => {

    const [visible, setVisible] = useState(false)

    const pathname = usePathname() as "/sign-in" | "/sign-up"

    const form = useForm<FormSignData>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        resolver: zodResolver(signSchema),
    })

    const {
        handleSubmit,
        register,
        formState: { errors, dirtyFields }
    } = form

    const { push } = useRouter()

    async function onSignInSubmit(data: FormSignData) {

        await signIn(data)
            .then(() => push("/"))
            .catch((err) => toast({
                title: "Error",
                description: err.message,
                variant: "error"
            }))
    }

    async function onSignUpSubmit(data: FormSignData) {

        await signUp(data)
            .then(() => toast({
                title: "Usuario criado com sucesso",
                onAutoClose: () => push("/sign-in")
            }))
            .catch(err => toast({
                title: "Error",
                description: err.message,
                variant: "error"
            }))
    }

    const onSubmit = pathname === "/sign-in" ? onSignInSubmit : onSignUpSubmit

    return (
        <Form {...form}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <div className="space-y-2">
                    <Input
                        placeholder="name@email.com"
                        {...register("email")}
                        className={cn(
                            (dirtyFields.email && !errors.email) && [
                                "focus-visible:ring-emerald-700",
                                "not-focus-visible:border-emerald-700"
                            ],
                            errors.email && [
                                "focus-visible:ring-destructive",
                                "not-focus-visible:border-destructive"
                            ]
                        )}
                    />
                    {
                        errors.email && (
                            <div className="text-destructive text-sm flex gap-2 items-center pt-1.5">
                                <Info className="size-4" />
                                <span>
                                    {errors.email.message}
                                </span>
                            </div>
                        )
                    }
                </div>
                <div className="space-y-2">
                    <Input
                        type={visible ? "text" : "password"}
                        placeholder="Your password"
                        {...register("password")}
                        className={cn(
                            (dirtyFields.password && !errors.password) && [
                                "focus-visible:ring-emerald-700 ",
                                "not-focus-visible:border-emerald-700"
                            ],
                            errors.password && [
                                "focus-visible:ring-destructive",
                                "not-focus-visible:border-destructive"
                            ]
                        )}
                    />
                    <Button
                        type="button"
                        variant={"link"}
                        className="p-0"
                        onClick={() => setVisible(visible => !visible)}
                    >
                        show password
                    </Button>
                    {
                        errors.password && (
                            <div className="text-destructive text-sm flex gap-2 items-center pt-1.5">
                                <Info className="size-4" />
                                <span>
                                    {errors.password.message}
                                </span>
                            </div>
                        )
                    }
                </div>
                <Separator />
                <Button
                    asChild
                    type="button"
                    variant={"link"}
                    className="w-full capitalize"
                >
                    <Link
                        href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
                    >
                        {
                            pathname === "/sign-in" ? "Create an account" : "I have an account"
                        }
                    </Link>
                </Button>
                <Button
                    type="submit"
                    className="w-full"
                >
                    Confirm
                </Button>
            </form>
        </Form >
    )
}